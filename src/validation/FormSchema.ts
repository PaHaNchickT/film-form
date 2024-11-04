import type { ZodSchema } from 'zod';
import { z } from 'zod';

import { TEXT_CONTENT } from '@/constants/const-text-content';

const FormSchema = (): ZodSchema => {
  const schema = z.object({
    title: z.string().min(1, TEXT_CONTENT.error.validationRequired),
    genre: z.string().min(1, TEXT_CONTENT.error.validationRequired),
    format: z.string().min(1, TEXT_CONTENT.error.validationRequired),
    unf: z.string().regex(/^(\d{3}-\d{3}-\d{3}-\d{2}-\d{3}|)$/, TEXT_CONTENT.error.validationFormat),
    country: z.string().min(1, TEXT_CONTENT.error.validationRequired),
    price: z.any().refine((value) => !isNaN(+value), { message: TEXT_CONTENT.error.validationNumber }),
    synopsis: z.string(),
  });

  return schema;
};

export default FormSchema;
