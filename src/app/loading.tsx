import { Spinner } from '@nextui-org/react';
import { type ReactElement } from 'react';

const Loader = (): ReactElement => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spinner color="danger" size="lg" />
    </div>
  );
};

export default Loader;
