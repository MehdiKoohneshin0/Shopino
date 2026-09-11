import { useState } from "react";
import { sendContactUsMessage } from "../../services/contactUs.service";
import { validate } from "../../validators";
import { contactUsSchema } from "./../../validators/contactUs";
import { toast } from "sonner";

const useContactUs = (initForm) => {
  const [form, setForm] = useState(initForm);
  const [isSending, setIsSending] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    if (!validate(contactUsSchema, form)) {
      setIsSending(false);
      return;
    }

    const response = sendContactUsMessage(form);

    toast.promise(response, {
      loading: "در حال ارسال پیام",
      success: () => {
        setIsSending(false);
        setForm(initForm);
        return "درخواست شما با موفقیت ارسال شد ";
      },
      error: (error) => {
        setIsSending(false);
        return error.message || "ارسال پیام با شکست مواجه شد";
      },
    });
  };

  return { form, isSending, handleChange, handleSubmit };
};

export default useContactUs;
