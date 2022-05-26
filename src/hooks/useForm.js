import { useState } from 'react';

function useForm({ initialValues, onSubmit, validate }) {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);

  const handleChange = ({ target: { name, value, pattern } }) => {
    if (value === '' || value.match(pattern) != null) {
      const newValues = { ...values, [name]: value };
      setValues(newValues);
      setIsValid(Object.keys(validate(newValues)).length === 0);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return {
    values,
    isValid,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
