import { useEffect, useState } from 'react';

function useForm({ initialValues, onSubmit, validate }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value });

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors(validate(values));
  };

  useEffect(() => {
    if (isLoading) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setIsLoading(false);
    }
  }, [errors]);

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
