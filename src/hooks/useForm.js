import { useState } from 'react';

function useForm({ initialValues, onSubmit, validate }) {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target: { name, value, pattern } }) => {
    if (value === '' || value.match(pattern) != null) {
      const newValues = { ...values, [name]: value };
      setValues(newValues);
      setIsValid(Object.keys(validate(newValues)).length === 0);
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
