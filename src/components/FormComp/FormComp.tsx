/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

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
    defaultValues: {
      title: localStorageUtil().getData()?.title || '',
      genre: localStorageUtil().getData()?.genre || '',
      format: localStorageUtil().getData()?.format || '',
      unf: localStorageUtil().getData()?.unf || '',
      country: localStorageUtil().getData()?.country || '',
      price: localStorageUtil().getData()?.price || '',
      synopsis: localStorageUtil().getData()?.synopsis || '',
    },
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
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-[98px] font-['Helvetica-Neue',sans-serif]">
      <div className="flex gap-[130px] h-[458px]">
        <div className="flex flex-col justify-between h-full w-[520px]">
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
        <div className="flex flex-col justify-between h-full w-[520px]">
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
