import { useState } from "react";
import { useNavigate } from "react-router";

import { validate } from "./../../validators";
import { sendOtpSchema, verifyOtpSchema } from "../../validators/auth";
import { sendOtp, verifyOtp } from "../../services/auth.service";
import { toast } from "sonner";

const useAuth = (initForm) => {
  const [form, setForm] = useState(initForm);
  const [isSentOtp, setisSentOtp] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendOtpHandler = async () => {
    if (!validate(sendOtpSchema, { phone: form.phone })) return;

    const data = await sendOtp(form.phone);

    if (!data.data.success) {
      toast.error("ارسال کد تایید با شکست مواجه شد");
      return;
    }

    setisSentOtp(true);
    toast.success("کد تایید برای شما ارسال شد.");
  };

  const verifyOtpHandler = async () => {
    if (!validate(verifyOtpSchema, form)) return;

    return await verifyOtp(form.phone, form.otp);
  };

  const login = async () => {
    try {
      const data = await verifyOtpHandler();

      if (!data) return;

      //save token

      toast.success("با موفقیت وارد شدید.");
      navigate("/");
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("کد تایید وارد شده اشتباه می‌باشد.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (isSentOtp) {
        login();
      } else {
        sendOtpHandler();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { form, isSentOtp, handleChange, handleSubmit };
};

export default useAuth;
