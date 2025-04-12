import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value //computed properties accessor
    });
  };

  const resetForm = () => { setFormState(initialForm) }


  return {
    ...formState, formState, onInputChange, resetForm
  };
}