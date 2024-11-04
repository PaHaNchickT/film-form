import { type ReactElement } from 'react';
import type { FieldErrors } from 'react-hook-form';

import type { TOptsForm } from '@/types/types';

import Pagination from '../Pagination/Pagination';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

const ControlPanel = (props: { errors: FieldErrors<TOptsForm>; filled: boolean }): ReactElement => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 xl:flex-row">
      <div className="w-[222px] hidden xl:block"></div>
      <Pagination />
      <SubmitBtn errors={props.errors} filled={props.filled} />
    </div>
  );
};

export default ControlPanel;
