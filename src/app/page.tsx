'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import FormComp from '@/components/FormComp/FormComp';

const App = (): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      {mounted ? <FormComp /> : <Spinner color="danger" size="lg" />}
    </main>
  );
};

export default App;
