import { Select, SelectItem } from '@nextui-org/react';
import { type ReactElement } from 'react';

const FormSelect = (props: { attributes: { attr: object; classNames: object }, variants: string[] }): ReactElement => {
  return (
    <Select
      classNames={Object.assign(props.attributes.classNames, {
        selectorIcon: ['opacity-0'],
        trigger: ['h-[58px]'],
      })}
      {...props.attributes.attr}
    >
      {props.variants!.map((value) => (
        <SelectItem value={value} key={value}>
          {value}
        </SelectItem>
      ))}
    </Select>
  );
};

export default FormSelect;
