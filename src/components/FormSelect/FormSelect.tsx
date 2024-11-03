import { Select, SelectItem } from '@nextui-org/react';
import { type ReactElement } from 'react';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import type { TFieldData, TOptsForm } from '@/types/types';

const FormSelect = (props: {
  item: TFieldData;
  register: UseFormRegister<TOptsForm>;
  errors: FieldErrors<TOptsForm>;
}): ReactElement => {
  return (
    <Select
      {...props.register(props.item.name)}
      label={props.item.label}
      placeholder={props.item.placeholder}
      labelPlacement="outside"
      errorMessage={props.errors.title?.message}
      isInvalid={Boolean(props.errors.title?.message)}
      radius="sm"
      variant="bordered"
    >
      {props.item.variants!.map((value, index) => (
        <SelectItem value={value} key={index}>
          {value}
        </SelectItem>
      ))}
    </Select>
  );
};

export default FormSelect;