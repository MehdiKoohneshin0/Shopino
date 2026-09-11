import axios from "axios";

export const sendOtp = (phone) => {
  return axios.post("https://shopino.iran.liara.run/v1/auth/send", { phone });
};

export const verifyOtp = (phone, otp) => {
  return axios.post("https://shopino.iran.liara.run/v1/auth/verify", {
    phone,
    otp,
    isSeller: false,
  });
};
