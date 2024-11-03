import '@/styles/globals.css';
import type { Metadata } from 'next';
import { type ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Производственные параметры фильма',
  description: 'MVP приложение для заполнения параметров фильма',
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<ReactElement> => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
