import React, { useCallback } from "react";

export function useForm(initialState) {
  const [values, setValues] = React.useState(initialState);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({...values, [name]: value});
  };

  return [values, handleChange, setValues];
}

export function useFormWithValidation({ initialState, validationSchema }) {
  const [values, setValues] = React.useState(initialState || {});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});

    const validator = (validationSchema || {})[name];
    if (!validator) {
      setErrors({...errors, [name]: target.validationMessage });
      setIsValid(target.closest("form").checkValidity()); 
    } else {
      const { message, isValid } = validator(target);
      setErrors({...errors, [name]: message });
      setIsValid(target.closest("form").checkValidity() && isValid); 
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}