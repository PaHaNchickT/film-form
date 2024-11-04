import { Button } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';
import type { FieldErrors } from 'react-hook-form';

import { TEXT_CONTENT } from '@/constants/const-text-content';
import { ArrowIcon } from '@/icons/ArrowIcon';
import type { TOptsForm } from '@/types/types';

const ControlPanel = (props: { errors: FieldErrors<TOptsForm>; filled: boolean }): ReactElement => {
  const [selected, setSelected] = useState(1);
  const initialArray = [1, 2, 3, 4];

  return (
    <div className="flex flex-col justify-between items-center gap-5 xl:flex-row">
      <div className="w-[222px] hidden xl:block"></div>
      <div className="flex gap-[4px] items-center font-['Inter_Tight',sans-serif]">
        <Button
          className={`rotate-180 min-w-0 p-0 w-[40px] h-[40px] bg-transparent ${selected === 1 && 'opacity-0'}`}
          radius="full"
          isDisabled={selected === 1}
          onPress={() => selected > 1 && setSelected((num) => num - 1)}
        >
          <ArrowIcon />
        </Button>
        {initialArray.map((number) => {
          const pageSwitch = (): void => {
            setSelected(number);
          };
          return (
            <Button
              key={number}
              radius="full"
              onPress={pageSwitch}
              className={`min-w-0 p-0 w-[40px] h-[40px] bg-transparent transition-all border-[1px] ${number === selected ? 'text-black border-[#bcbcbc]' : 'text-[#bcbcbc] border-transparent'}`}
            >
              {number}
            </Button>
          );
        })}
        <Button
          radius="full"
          className={`min-w-0 p-0 w-[40px] h-[40px] bg-transparent ${selected === initialArray.length && 'opacity-0'}`}
          isDisabled={selected === initialArray.length}
          onPress={() => selected < initialArray.length && setSelected((num) => num + 1)}
        >
          <ArrowIcon />
        </Button>
      </div>

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
    </div>
  );
};

export default ControlPanel;
