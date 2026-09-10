import { z } from "zod";

export const contactUsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, { error: "نام باید حداقل 3 کاراکتر داشته باشد" })
    .max(50, { error: "نام باید حداکثر 50 کاراکتر داشته باشد" }),

  phone: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, { error: "فرمت شماره موبایل اشتباه می‌باشد" }),

  subject: z
    .string()
    .trim()
    .min(3, { error: "موضوع پیام باید حداقل 3 کاراکتر داشته باشد" })
    .max(50, { error: "موضوع پیام باید حداکثر 50 کاراکتر داشته باشد" }),

  content: z
    .string()
    .trim()
    .min(10, { error: "محتوای پیام باید حداقل 10 کاراکتر داشته باشد" })
    .max(1000, { error: "محتوای پیام باید حداکثر 1000 کاراکتر داشته باشد" }),
});
