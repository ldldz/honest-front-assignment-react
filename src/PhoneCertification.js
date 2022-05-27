import { useContext } from 'react';
import { Input, Timer } from './components';
import { AuthenticationContext } from './contexts/Authentication';

function PhoneCertification() {
  const { token, identityData } = useContext(AuthenticationContext);
  console.log(token, identityData);

  function handleSubmit(e) {
    e.preventDefault();
  }
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
              type={'number'}
              name={'authNo'}
              placeholder={'번호 6자리를 입력해 주세요'}
            >
              <button className="resend">재전송</button>
            </Input>
          </div>
        </label>
        <button className="submitButton" type={'submit'}>
          본인인증하기
        </button>
      </form>
    </main>
  );
}

export default PhoneCertification;
