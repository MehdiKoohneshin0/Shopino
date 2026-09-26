import { useContext, useState } from "react";

import { validate } from "./../../validators";
import * as authService from "./../../services/auth.service";
import { toast } from "sonner";
import { sendOtpSchema, verifyOtpSchema } from "../../validators/auth";
import { useNavigate } from "react-router";
import { AuthContext } from "../../contexts/authContext";

const useAuth = (initForm) => {
  const [form, setForm] = useState(initForm);
  const [isSentOtp, setIsSentOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { refreshUser } = useContext(AuthContext);

  const { phone, otp } = form;

  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendOtp = async () => {
    try {
      if (!validate(sendOtpSchema, { phone })) return;

      setIsLoading(true);
      const data = await authService.sendOtp(phone);
      setIsSentOtp(true);
      toast.success("کد تایید با موفقیت ارسال شد.");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  const login = async () => {
    try {
      if (!validate(verifyOtpSchema, { phone, otp })) return;

      setIsLoading(true);
      const response = await authService.veriftOtp(phone, otp);

      if (response.status === 200) {
        navigate("/");
        toast.success("با موفقیت وارد شدید");
        refreshUser();
      }
    } catch (err) {
      if (err.status === 400) {
        toast.error("کد وارد شده اشتباه است");
        setForm((prev) => ({ ...prev, otp: "" }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSentOtp) {
      handleSendOtp();
    } else {
      login();
    }
  };

  return {
    form,
    isSentOtp,
    isLoading,
    handleFormChange,
    handleSubmit,
  };
};

export default useAuth;
