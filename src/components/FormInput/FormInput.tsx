import { Input } from '@nextui-org/react';
import { type ReactElement } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import type { TFieldData, TOptsForm } from '@/types/types';

const FormInput = (props: {
  item: TFieldData;
  register: UseFormRegister<TOptsForm>;
  errors: FieldErrors<TOptsForm>;
}): ReactElement => {
  return (
    <Input
      type={props.item.type}
      {...props.register(props.item.name)}
      label={props.item.label}
      placeholder={props.item.placeholder}
      labelPlacement="outside"
      errorMessage={props.errors[props.item.name]?.message}
      isInvalid={Boolean(props.errors[props.item.name]?.message)}
      radius="sm"
      variant="bordered"
      classNames={{
        input: ['h-[54px]'],
      }}
    />
  );
};

export default FormInput;
