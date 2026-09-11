import { useState } from "react";

const useAuth = (initForm) => {
  const [form, setForm] = useState(initForm);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return { form, handleChange };
};

export default useAuth;
