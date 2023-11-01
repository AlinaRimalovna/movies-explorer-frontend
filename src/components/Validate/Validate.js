import React, { useCallback } from "react";
import { useState } from "react";

export function useForm() {
  const [values, setValues] = useState({});
  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };
  return { values, handleChange, setValues };
}

export function useFormValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const box = target.name;
    setValues({ ...values, [box]: value });
    setErrors({ ...errors, [box]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
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
