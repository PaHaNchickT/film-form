import { Textarea } from '@nextui-org/react';
import { type ReactElement } from 'react';

const FormTextarea = (props: { attributes: { attr: object; classNames: object } }): ReactElement => {
  return (
    <Textarea
      disableAutosize
      rows={6}
      classNames={{
        label: 'text-xs sm:text-base pb-3',
      }}
      {...props.attributes.attr}
    />
  );
};

export default FormTextarea;
