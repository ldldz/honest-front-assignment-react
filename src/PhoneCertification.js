import { useContext } from 'react';
import { Input, Timer } from './components';
import { AuthenticationContext } from './contexts/Authentication';
import useForm from './hooks/useForm';
import { validateAuthNo } from './utils/validate';

const initialValues = {
  authNo: '',
  token: '',
};

function PhoneCertification() {
  const { token, identityData } = useContext(AuthenticationContext);

  function onSubmit({ authNo }) {}

  const { values, isValid, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
    validate: validateAuthNo,
  });

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
            <Timer />
          </div>
          <div className="inputs">
            <Input
              value={values.authNo}
              type={'tel'}
              name={'authNo'}
              maxLength={6}
              pattern="^[0-9]+$"
              placeholder={'번호 6자리를 입력해 주세요'}
              onChange={handleChange}
            >
              <button className="resend">재전송</button>
            </Input>
          </div>
        </label>
        <button className="submitButton" type={'submit'} disabled={!isValid}>
          본인인증하기
        </button>
      </form>
    </main>
  );
}

export default PhoneCertification;
