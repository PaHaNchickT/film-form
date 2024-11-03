import { Textarea } from '@nextui-org/react';
import { type ReactElement } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import type { TFieldData, TOptsForm } from '@/types/types';

const FormTextarea = (props: {
  item: TFieldData;
  register: UseFormRegister<TOptsForm>;
  errors: FieldErrors<TOptsForm>;
}): ReactElement => {
  return (
    <Textarea
      {...props.register(props.item.name)}
      label={props.item.label}
      placeholder={props.item.placeholder}
      labelPlacement="outside"
      errorMessage={props.errors.title?.message}
      isInvalid={Boolean(props.errors.title?.message)}
      className="w-[498px]"
      radius="sm"
      variant="bordered"
    />
  );
};

export default FormTextarea;
