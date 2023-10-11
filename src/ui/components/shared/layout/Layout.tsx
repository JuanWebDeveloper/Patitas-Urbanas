import { Fragment } from 'react';
import Head from 'next/head';
import { LayoutModel } from '@/src/core/models';
import { useSelectorState } from '@/src/core/hooks';
import { RobotoCondensed } from '@/public/fonts';
// Shared Components
import { Navbar } from '@/src/ui/components';

export const Layout = ({ children }: LayoutModel) => {
 const { theme } = useSelectorState((state) => state.ui);

 <Head>
  <link rel='shortcut icon' href='images/favicon.png' type='image/x-icon' />
 </Head>;
 return (
  <Fragment>
   <main className={`${theme ? 'dark' : 'light'}-theme ${RobotoCondensed.variable}`}>
    <Navbar />
    {children}
   </main>
  </Fragment>
 );
};
