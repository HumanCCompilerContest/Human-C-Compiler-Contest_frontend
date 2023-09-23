import * as yup from 'yup'

export const submitFormSchema = yup
  .object({
    isCE: yup.boolean().required(),
    asm: yup.string().when('isCE', {
      is: (isCE: boolean) => isCE === false,
      then: (schema) => schema.required('この項目は必須です'),
    }),
    error_line_number: yup
      .number()
      .typeError('数字を入力してください')
      .integer('整数を入力してください')
      .min(1, '1以上の数字を入れてください')
      .nullable()
      .transform((value, originalValue) =>
        String(originalValue).trim() === '' ? null : value,
      )
      .when('isCE', {
        is: (isCE: boolean) => isCE === true,
        then: (schema) => schema.required('この項目は必須です'),
      }),
  })
  .required()

export const loginFormSchema = yup.object({
  name: yup.string().required('この項目は必須です'),
  password: yup.string().required('この項目は必須です'),
})

export const registerFormSchema = yup.object({
  name: yup.string().required('この項目は必須です'),
  password: yup.string().required('この項目は必須です'),
})

export type SubmitFormSchema = yup.InferType<typeof submitFormSchema>
export type LoginFormSchema = yup.InferType<typeof loginFormSchema>
export type RegisterFormSchema = yup.InferType<typeof registerFormSchema>
