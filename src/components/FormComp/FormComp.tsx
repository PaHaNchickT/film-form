'use client';

// import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/react';
import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { FORM_DATA } from '@/constants/const-text-content';
import type { TOptsForm } from '@/types/types';

import FormInput from '../FormInput/FormInput';

const FormComp = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TOptsForm>({
    mode: 'onChange',
    // resolver: zodResolver(QuestionFormSchema()),
    // defaultValues: {
    //   title: '',
    // },
  });

  const submit = (data: TOptsForm): void => {
    console.log(data);
  };

  // // Props for inputs
  // const itemStyleProps = {
  //   isInvalid: Boolean(errors.answer?.message),
  //   errorMessage: errors.answer?.message,
  //   size: inputSize,
  //   className: 'transition-all',
  // };

  // const itemVariantsProps = {
  //   color: 'danger' as const,
  //   ...itemStyleProps,
  //   className: `${props.opacity}`,
  // };

  // const itemNonVariantsProps = {
  //   ...register('answer'),
  //   value: watch('answer'),
  //   onChange: handleChange,
  //   ...itemStyleProps,
  //   className: `${props.opacity} block sm:inline-block`,
  // };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-10">
      <div className="flex gap-5">
        <div className="flex flex-col gap-10">
          {FORM_DATA.map(
            (item, index) => index < 4 && <FormInput key={index} item={item} register={register} errors={errors} />,
          )}
        </div>
        <div className="flex flex-col gap-10">
          {FORM_DATA.map(
            (item, index) => index >= 4 && <FormInput key={index} item={item} register={register} errors={errors} />,
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
