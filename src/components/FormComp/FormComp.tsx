'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { FORM_DATA } from '@/constants/const-text-content';
import type { TOptsForm } from '@/types/types';
import FormSchema from '@/validation/FormSchema';

import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import FormTextarea from '../FormTextarea/FormTextarea';

const FormComp = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TOptsForm>({
    mode: 'onChange',
    resolver: zodResolver(FormSchema()),
  });

  const submit = (data: TOptsForm): void => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-10">
      <div className="flex gap-5 h-[443px]">
        <div className="flex flex-col justify-between h-full w-[498px]">
          {FORM_DATA.map(
            (item, index) =>
              index < 4 &&
              (item.type === 'text' ? (
                <FormInput key={index} item={item} register={register} errors={errors} />
              ) : (
                <FormSelect key={index} item={item} register={register} errors={errors} />
              )),
          )}
        </div>
        <div className="flex flex-col justify-between h-full w-[498px]">
          {FORM_DATA.map(
            (item, index) =>
              index >= 4 &&
              ((item.type === 'text' && <FormInput key={index} item={item} register={register} errors={errors} />) ||
                (item.type === 'select' && (
                  <FormSelect key={index} item={item} register={register} errors={errors} />
                )) ||
                (item.type === 'textarea' && (
                  <FormTextarea key={index} item={item} register={register} errors={errors} />
                ))),
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div></div>
        <p>1</p>
        <Button type="submit" color="default" isDisabled={Boolean(errors.title?.message)}>
          Следующий шаг
        </Button>
      </div>
    </form>
  );
};

export default FormComp;
