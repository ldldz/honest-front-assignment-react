import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Input } from '../components';
import { AuthenticationContext } from '../contexts/Authentication';
import useForm from '../hooks/useForm';

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
  const { setTokenByIdentityData } = useContext(AuthenticationContext);

  async function onSubmit(values) {
    try {
      const identityData = {
        name: values.name,
        civilcodeFirst: values.civilcodeFirst,
        civilcodeLast: values.civilcodeLast,
        mobile: values.mobileFirst + values.mobileMiddle + values.mobileLast,
      };
      await setTokenByIdentityData(identityData);
      navigate('/phone-certification', { replace: true });
    } catch (error) {
      alert(error);
    }
  }
  const { values, isValid, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
  });

  return (
    <main>
      <h1>비대면 대출을 위해 본인 인증이 필요해요</h1>
      <form onSubmit={handleSubmit}>
        <label>
          휴대폰 번호
          <div className="inputs">
            <Input
              inputProps={{
                value: values.mobileFirst,
                type: 'tel',
                name: 'mobileFirst',
                minLength: 3,
                maxLength: 3,
                pattern: '^[0-9]+$',
                onChange: handleChange,
              }}
            />
            -
            <Input
              inputProps={{
                value: values.mobileMiddle,
                type: 'tel',
                name: 'mobileMiddle',
                minLength: 3,
                maxLength: 4,
                pattern: '^[0-9]+$',
                onChange: handleChange,
              }}
            />
            -
            <Input
              inputProps={{
                value: values.mobileLast,
                type: 'tel',
                name: 'mobileLast',
                minLength: 4,
                maxLength: 4,
                pattern: '^[0-9]+$',
                onChange: handleChange,
              }}
            />
          </div>
        </label>
        <label>
          주민등록 번호
          <div className="inputs">
            <Input
              inputProps={{
                value: values.civilcodeFirst,
                type: 'tel',
                name: 'civilcodeFirst',
                minLength: 6,
                maxLength: 6,
                pattern: '^[0-9]+$',
                placeholder: '앞 6자리',
                onChange: handleChange,
              }}
            />
            -
            <Input
              inputProps={{
                value: values.civilcodeLast,
                type: 'password',
                name: 'civilcodeLast',
                minLength: 7,
                maxLength: 7,
                pattern: '^[0-9]+$',
                placeholder: '뒤 7자리',
                onChange: handleChange,
              }}
            />
          </div>
        </label>
        <label>
          이름
          <div className="inputs">
            <Input
              inputProps={{
                value: values.name,
                type: 'text',
                name: 'name',
                minLength: 2,
                maxLength: 17,
                pattern: '^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$',
                placeholder: '이름을 입력해 주세요',
                onChange: handleChange,
              }}
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
