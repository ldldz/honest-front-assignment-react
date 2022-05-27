import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { postIdentityAuthentication } from './api';
import { Input } from './components';
import { AuthenticationContext } from './contexts/Authentication';
import useForm from './hooks/useForm';
import { validateIdentity } from './utils/validate';

const initialValues = {
  mobileFirst: '010',
  mobileMiddle: '',
  mobileLast: '',
  civilcodeFirst: '',
  civilcodeLast: '',
  name: '',
};

function IdentityAuthentication() {
  const navigate = useNavigate();
  const { setToken, setIdentityData } = useContext(AuthenticationContext);

  const onSubmit = async ({
    name,
    civilcodeFirst,
    civilcodeLast,
    mobileFirst,
    mobileMiddle,
    mobileLast,
  }) => {
    try {
      const data = {
        name,
        civilcodeFirst,
        civilcodeLast,
        mobile: mobileFirst + mobileMiddle + mobileLast,
      };
      const { response, error } = await postIdentityAuthentication(data);

      if (error) {
        throw new Error('token을 받지 못했습니다.');
      }
      setToken(response.token);
      setIdentityData(data);

      navigate('/phone-certification', { replace: true });
    } catch (error) {
      alert(error);
    }
  };
  const { values, isValid, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
    validate: validateIdentity,
  });

  return (
    <main>
      <h1>비대면 대출을 위해 본인 인증이 필요해요</h1>
      <form onSubmit={handleSubmit}>
        <label>
          휴대폰 번호
          <div className="inputs">
            <Input
              value={values.mobileFirst}
              type={'tel'}
              name="mobileFirst"
              maxLength={3}
              pattern="^[0-9]+$"
              onChange={handleChange}
            />
            -
            <Input
              value={values.mobileMiddle}
              type={'tel'}
              maxLength={4}
              pattern="^[0-9]+$"
              name="mobileMiddle"
              onChange={handleChange}
            />
            -
            <Input
              value={values.mobileLast}
              type={'tel'}
              name="mobileLast"
              maxLength={4}
              pattern="^[0-9]+$"
              onChange={handleChange}
            />
          </div>
        </label>
        <label>
          주민등록 번호
          <div className="inputs">
            <Input
              value={values.civilcodeFirst}
              type={'tel'}
              name={'civilcodeFirst'}
              maxLength={6}
              pattern="^[0-9]+$"
              placeholder="앞 6자리"
              onChange={handleChange}
            />
            -
            <Input
              value={values.civilcodeLast}
              type={'password'}
              name={'civilcodeLast'}
              maxLength={7}
              pattern="^[0-9]+$"
              placeholder="뒤 7자리"
              onChange={handleChange}
            />
          </div>
        </label>
        <label>
          이름
          <div className="inputs">
            <Input
              value={values.name}
              type={'text'}
              name={'name'}
              maxLength={17}
              pattern="^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$"
              placeholder="이름을 입력해 주세요"
              onChange={handleChange}
            />
          </div>
        </label>
        <button className="submitButton" type={'submit'} disabled={!isValid}>
          다음
        </button>
      </form>
    </main>
  );
}

export default IdentityAuthentication;
