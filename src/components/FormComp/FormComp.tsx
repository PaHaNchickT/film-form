/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { FORM_DEFAULT_VALUES } from '@/constants/const-form-init-values';
import { FORM_DATA } from '@/constants/const-text-content';
import type { TFieldData, TOptsForm } from '@/types/types';
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

  const propsGenerator = (item: TFieldData): { attr: object; classNames: object } => {
    return {
      attr: {
        ...register(item.name),
        placeholder: item.placeholder,
        label: item.label,
        labelPlacement: 'outside',
        errorMessage: errors[item.name]?.message,
        isInvalid: Boolean(errors[item.name]?.message),
        size: 'lg',
        variant: 'bordered',
        radius: 'sm',
      },
      classNames: {
        label: [`pb-2 text-xs sm:text-base ${item.tracking && item.tracking}`],
        helperWrapper: ['absolute right-[18px] top-[15px]'],
        errorMessage: ['text-base tracking-tight'],
      },
    };
  };

  useEffect(() => {
    setFilled(
      Boolean(watch('title').length && watch('genre').length && watch('format').length && watch('country').length),
    );
  }, [watch('title'), watch('genre'), watch('format'), watch('country')]);

  const submit = (data: TOptsForm): void => {
    console.log(data);

    localStorageUtil().saveData(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-[50px] font-['Helvetica-Neue',sans-serif] xl:gap-[96px]"
    >
      <div className="flex flex-col items-center gap-8 flex-wrap xl:flex-row xl:gap-[130px]">
        <div className="flex flex-col justify-between gap-8 w-full sm:w-[520px] xl:min-h-[458px]">
          <div className="flex flex-col gap-8">
            {FORM_DATA.map(
              (item, index) =>
                index < 3 &&
                (item.type === 'text' ? (
                  <FormInput key={index} attributes={propsGenerator(item)} type={item.type} />
                ) : (
                  <FormSelect key={index} attributes={propsGenerator(item)} variants={item.variants!} />
                )),
            )}
          </div>
          <div>
            <FormInput attributes={propsGenerator(FORM_DATA[3])} type={FORM_DATA[3].type} />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 w-full sm:w-[520px] xl:min-h-[458px]">
          <div className="flex flex-col gap-[60px]">
            {FORM_DATA.map(
              (item, index) =>
                index > 3 &&
                index < FORM_DATA.length - 1 &&
                (item.type === 'text' ? (
                  <FormInput key={index} attributes={propsGenerator(item)} type={item.type} />
                ) : (
                  <FormSelect key={index} attributes={propsGenerator(item)} variants={item.variants!} />
                )),
            )}
          </div>
          <div>
            <FormTextarea attributes={propsGenerator(FORM_DATA[FORM_DATA.length - 1])} />
          </div>
        </div>
      </div>
      <ControlPanel errors={errors} filled={filled} />
    </form>
  );
};

export default FormComp;
