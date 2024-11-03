'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import FormComp from '@/components/FormComp/FormComp';

const App = (): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        <main className="w-screen h-screen flex justify-center items-center">
          <FormComp />
        </main>
      ) : (
        <Spinner color="danger" size="lg" />
      )}
    </>
  );
};

export default App;
