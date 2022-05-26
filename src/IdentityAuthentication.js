import { Input } from './components';

function IdentityAuthentication() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <main>
      <h1>비대면 대출을 위해 본인 인증이 필요해요</h1>
      <form onSubmit={handleSubmit}>
        <label>
          휴대폰 번호
          <div className="inputs">
            <Input value={'010'} type={'tel'} name="phoneNumberFirst" />
            -
            <Input type={'tel'} name="phoneNumberMiddle" />
            -
            <Input type={'tel'} name="phoneNumberLast" />
          </div>
        </label>
        <label>
          주민등록 번호
          <div className="inputs">
            <Input
              type={'number'}
              name={'civilCodeFirst'}
              placeholder="앞 6자리"
            />
            -
            <Input
              type={'password'}
              name={'civilCodeLast'}
              placeholder="뒤 7자리"
            />
          </div>
        </label>
        <label>
          이름
          <div className="inputs">
            <Input
              type={'text'}
              name={'name'}
              placeholder="이름을 입력해 주세요"
            />
          </div>
        </label>
        <button className="submitButton" type={'submit'}>
          다음
        </button>
      </form>
    </main>
  );
}

export default IdentityAuthentication;
