import { Button } from '@nextui-org/react';
import { type ReactElement } from 'react';
import type { FieldErrors } from 'react-hook-form';

import { TEXT_CONTENT } from '@/constants/const-text-content';
import { ArrowIcon } from '@/icons/ArrowIcon';
import type { TOptsForm } from '@/types/types';

const SubmitBtn = (props: { errors: FieldErrors<TOptsForm>; filled: boolean }): ReactElement => {
  return (
    <Button
      type="submit"
      color="default"
      radius="full"
      isDisabled={Boolean(Object.keys(props.errors).length) || !props.filled}
      className="w-[260px] h-[48px] relative p-0 font-['Helvetica',sans-serif] text-base"
    >
      <ArrowIcon className="absolute right-[22px]" />
      {TEXT_CONTENT.controlPanel.button}
    </Button>
  );
};

export default SubmitBtn;
