import * as yup from 'yup'

export const submitFormSchema = yup
  .object({
    isCE: yup.boolean().required(),
    asm: yup.string().when('isCE', {
      is: (isCE: boolean) => isCE === false,
      then: (schema) => schema.required('この項目は必須です'),
    }),
  })
  .required()

export type SubmitFormSchema = yup.InferType<typeof submitFormSchema>
