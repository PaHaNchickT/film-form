'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import FormComp from '@/components/FormComp/FormComp';
import WelcomePanel from '@/components/WelcomePanel/WelcomePanel';

const App = (): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <main className="flex justify-center items-center py-10 min-w-screen min-h-screen">
      {mounted ? (
        <div className="flex flex-col gap-[124px]">
          <WelcomePanel />
          <FormComp />
        </div>
      ) : (
        <Spinner color="danger" size="lg" />
      )}
    </main>
  );
};

export default App;
