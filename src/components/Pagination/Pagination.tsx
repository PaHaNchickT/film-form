import { Button } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import { ArrowIcon } from '@/icons/ArrowIcon';

const Pagination = (): ReactElement => {
  const [selected, setSelected] = useState(1);
  const initialArray = [1, 2, 3, 4];

  return (
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
  );
};

export default Pagination;
