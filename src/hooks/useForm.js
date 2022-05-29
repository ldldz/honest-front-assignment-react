import { useState } from 'react';

function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validate = (form, values) =>
    Object.keys(values).every(
      (key) => values[key].length >= form[key].minLength
    );

  const handleChange = ({ target: { name, value, pattern, form } }) => {
    if (value === '' || value.match(pattern) != null) {
      const newValues = { ...values, [name]: value };
      setValues(newValues);
      setIsValid(validate(form, newValues));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      await onSubmit(values);
      setIsLoading(false);
    }
  };

  return {
    values,
    isValid,
    isLoading,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
