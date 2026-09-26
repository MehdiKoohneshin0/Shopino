import api from ".";

export const sendOtp = async (phone) => {
  const { data } = await api.post("/auth/send", { phone });

  return data;
};

export const veriftOtp = async (phone, otp) => {
  const { data } = await api.post("/auth/verify", {
    phone,
    otp,
    isSeller: false,
  });

  return data;
};

export const getMe = async () => {
  const { data } = await api.get("auth/me");

  return data;
};
