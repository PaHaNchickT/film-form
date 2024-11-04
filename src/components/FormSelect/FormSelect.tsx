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
      errorMessage={props.errors[props.item.name]?.message}
      isInvalid={Boolean(props.errors[props.item.name]?.message)}
      size="lg"
      radius="sm"
      variant="bordered"
      classNames={{
        label: [`pb-2 ${props.item.tracking && props.item.tracking}`],
        selectorIcon: ['opacity-0'],
        trigger: ['h-[58px]'],
        helperWrapper: ['absolute right-[18px] top-[15px]'],
        errorMessage: ['text-base tracking-tight'],
      }}
    >
      {props.item.variants!.map((value) => (
        <SelectItem value={value} key={value}>
          {value}
        </SelectItem>
      ))}
    </Select>
  );
};

export default FormSelect;
