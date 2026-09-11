import InputField from "../Components/Templates/ContactUS/InputField";
import useAuth from "../lib/Hooks/useAuth";

const initForm = {
  phone: "",
  otp: "",
};

const AuthPage = () => {
  const { form, isSentOtp, handleChange, handleSubmit } = useAuth(initForm);

  return (
    <div className="flex-center flex-col gap-6 *:w-full">
      <span className="flex-center flex-col gap-2">
        <h4>خوش برگشتید</h4>
        <p className="text-xs text-neutral-500 font-bold">ثبت نام یا ورود</p>
      </span>
      <form className="grid grid-cols-2 gap-5 " onSubmit={handleSubmit}>
        {!isSentOtp ? (
          <InputField
            value={form.phone}
            onChange={handleChange}
            fullWidth
            placeholder={"09123456789 "}
            name={"phone"}
            label={"شماره موبایل خود را وارد کنید"}
          />
        ) : (
          <InputField
            value={form.otp}
            onChange={handleChange}
            fullWidth
            placeholder={"کد تایید"}
            name={"otp"}
          />
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-2xl w-full py-2 text-sm col-span-2"
        >
          {isSentOtp ? "ثبت کد" : "ارسال کد"}
        </button>
      </form>
    </div>
  );
};

export default AuthPage;
