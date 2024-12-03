import { useState } from "react";

function useForm(initialValues = {}, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Validate as you type
    if (validate) {
      const error = validate({ [name]: value });
      setErrors((prev) => ({
        ...prev,
        ...error,
      }));
    }
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);

      // Stop submission if there are errors
      if (Object.keys(validationErrors).length > 0) return;
    }

    onSubmit(values);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
