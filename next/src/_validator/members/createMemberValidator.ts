import {z} from "zod";

export default z.object({
  name: z.string()
    .max(255, {
      message: "255文字以内で入力してください。"
    })
    .min(1, {
      message: "必須です。"
    }),

  gender: z
    .enum(['0', '1', '2'], {
      message: "範囲外です。"
    }),

  birthday: z.date(),

  email: z.string()
    .email("フォーマット不正です。"),

  tel: z.string()
    .max(11, {
      message: "フォーマット不正です。"
    }),

  note: z.string()
    .max(1000)
    .nullish()
})