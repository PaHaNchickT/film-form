import { Button } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/const-text-content';

const WelcomePanel = (): ReactElement => {
  return (
    <div className="flex justify-between">
      <h1 className="text-5xl w-[564px] font-['Inter_Tight',sans-serif] font-semibold tracking-[-0.022em] leading-tight">
        {TEXT_CONTENT.welcome.title}
      </h1>
      <Button
        radius="full"
        className="bg-transparent border-[#bcbcbc] border-[1px] w-[235px] h-[48px] p-0 font-['Helvetica',sans-serif] mt-6 text-base"
      >
        {TEXT_CONTENT.welcome.button}
      </Button>
    </div>
  );
};

export default WelcomePanel;
