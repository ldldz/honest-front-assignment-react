import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { postPhoneCertification } from './api';
import { Input, Timer } from './components';
import { AuthenticationContext } from './contexts/Authentication';
import useForm from './hooks/useForm';
import { validateAuthNo } from './utils/validate';

const TOKEN_VALID_TIME = 3 * 60 * 1000;
const initialValues = { authNo: '' };

function PhoneCertification() {
  const navigate = useNavigate();
  const [isTimerEnd, setIsTimerEnd] = useState(false);
  const { token, tokenIssueTime, setTokenByIdentityData } = useContext(
    AuthenticationContext
  );

  async function onSubmit({ authNo }) {
    try {
      const phoneCertificationData = { code: authNo, token };
      const { error } = await postPhoneCertification(phoneCertificationData);

      if (error) {
        throw new Error(error);
      }
      alert('인증되었습니다.');
      navigate('/', { replace: true });
    } catch (error) {
      alert(error);
    }
  }

  async function updateToken() {
    try {
      await setTokenByIdentityData();
    } catch (error) {
      alert(error);
    }
  }

  const { values, isValid, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
    validate: validateAuthNo,
  });

  useEffect(() => setIsTimerEnd(false), [tokenIssueTime]);

  return (
    <main>
      <h1>
        휴대폰 번호로 전송된
        <br />
        인증번호를 입력해 주세요
      </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <div className="flex">
            <span>인증번호</span>
            <Timer
              validTime={TOKEN_VALID_TIME}
              startTime={tokenIssueTime}
              setIsTimerEnd={setIsTimerEnd}
            />
          </div>
          <div className="inputs">
            <Input
              inputProps={{
                value: values.authNo,
                type: 'tel',
                name: 'authNo',
                maxLength: 6,
                pattern: '^[0-9]+$',
                placeholder: '번호 6자리를 입력해 주세요',
                onChange: handleChange,
              }}
            >
              <button type="button" className="resend" onClick={updateToken}>
                재전송
              </button>
            </Input>
          </div>
        </label>
        <button
          className="submitButton"
          type={'submit'}
          disabled={!(isValid && !isTimerEnd)}
        >
          본인인증하기
        </button>
      </form>
    </main>
  );
}

export default PhoneCertification;
