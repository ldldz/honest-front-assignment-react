import { Input } from './components';
import useForm from './hooks/useForm';

const initialValues = {
  mobileFirst: '010',
  mobileMiddle: '',
  mobileLast: '',
  civilcodeFirst: '',
  civilcodeLast: '',
  name: '',
};
const onSubmit = async ({
  name,
  civilcodeFirst,
  civilcodeLast,
  mobileFirst,
  mobileMiddle,
  mobileLast,
}) => {
  const data = {
    name,
    civilcodeFirst,
    civilcodeLast,
    mobile: mobileFirst + mobileMiddle + mobileLast,
  };
  console.log(data); // post 요청으로 변경
};
const validate = () => ({});

function IdentityAuthentication() {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <main>
      <h1>비대면 대출을 위해 본인 인증이 필요해요</h1>
      <form onSubmit={handleSubmit}>
        <label>
          휴대폰 번호
          <div className="inputs">
            <Input defaultValue={'010'} type={'tel'} name="mobileFirst" />
            -
            <Input
              value={values.mobileMiddle}
              type={'tel'}
              name="mobileMiddle"
              onChange={handleChange}
            />
            -
            <Input
              value={values.mobileLast}
              type={'tel'}
              name="mobileLast"
              onChange={handleChange}
            />
          </div>
        </label>
        <label>
          주민등록 번호
          <div className="inputs">
            <Input
              value={values.civilcodeFirst}
              type={'number'}
              name={'civilcodeFirst'}
              placeholder="앞 6자리"
              onChange={handleChange}
            />
            -
            <Input
              value={values.civilcodeLast}
              type={'password'}
              name={'civilcodeLast'}
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
              placeholder="이름을 입력해 주세요"
              onChange={handleChange}
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
