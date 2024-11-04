import { Input } from '@nextui-org/react';
import { type ReactElement } from 'react';

const FormInput = (props: { attributes: { attr: object; classNames: object }; type: string }): ReactElement => {
  return (
    <Input
      type={props.type}
      classNames={Object.assign(props.attributes.classNames, {
        inputWrapper: ['h-[58px]'],
      })}
      {...props.attributes.attr}
    />
  );
};

export default FormInput;
