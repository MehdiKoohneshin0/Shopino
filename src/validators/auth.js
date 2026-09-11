import { z } from "zod";

export const sendOtpSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, { error: "فرمت شماره موبایل اشتباه می‌باشد" }),
});

export const verifyOtpSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, { error: "فرمت شماره موبایل اشتباه می‌باشد" }),

  otp: z.string().trim().length(4, { error: "کد تایید باید 4 رقمی باشد" }),
});
