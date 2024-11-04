/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { FORM_DEFAULT_VALUES } from '@/constants/const-form-init-values';
import { FORM_DATA } from '@/constants/const-text-content';
import type { TOptsForm } from '@/types/types';
import { localStorageUtil } from '@/utils/localStorageUtil';
import FormSchema from '@/validation/FormSchema';

import ControlPanel from '../ControlPanel/ControlPanel';
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import FormTextarea from '../FormTextarea/FormTextarea';

const FormComp = (): ReactElement => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TOptsForm>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema()),
    defaultValues: localStorageUtil().getData() ? localStorageUtil().getData()! : FORM_DEFAULT_VALUES,
  });

  const [filled, setFilled] = useState(false);

  const submit = (data: TOptsForm): void => {
    console.log(data);

    localStorageUtil().saveData(data);
  };

  useEffect(() => {
    setFilled(
      Boolean(watch('title').length && watch('genre').length && watch('format').length && watch('country').length),
    );
  }, [watch('title'), watch('genre'), watch('format'), watch('country')]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-[50px] font-['Helvetica-Neue',sans-serif] xl:gap-[98px]"
    >
      <div className="flex flex-col items-center gap-8 flex-wrap xl:flex-row xl:gap-[130px]">
        <div className="flex flex-col justify-between gap-8 w-full sm:w-[520px] xl:min-h-[458px]">
          <div className="flex flex-col gap-8">
            {FORM_DATA.map(
              (item, index) =>
                index < 3 &&
                (item.type === 'text' ? (
                  <FormInput key={index} item={item} register={register} errors={errors} />
                ) : (
                  <FormSelect key={index} item={item} register={register} errors={errors} />
                )),
            )}
          </div>
          <div>
            <FormInput item={FORM_DATA[3]} register={register} errors={errors} />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 w-full sm:w-[520px] xl:min-h-[458px]">
          <div className="flex flex-col gap-[60px]">
            {FORM_DATA.map(
              (item, index) =>
                index > 3 &&
                index < FORM_DATA.length - 1 &&
                ((item.type === 'text' && <FormInput key={index} item={item} register={register} errors={errors} />) ||
                  (item.type === 'select' && (
                    <FormSelect key={index} item={item} register={register} errors={errors} />
                  )) ||
                  (item.type === 'textarea' && (
                    <FormTextarea key={index} item={item} register={register} errors={errors} />
                  ))),
            )}
          </div>
          <div>
            <FormTextarea item={FORM_DATA[FORM_DATA.length - 1]} register={register} errors={errors} />
          </div>
        </div>
      </div>
      <ControlPanel errors={errors} filled={filled} />
    </form>
  );
};

export default FormComp;
