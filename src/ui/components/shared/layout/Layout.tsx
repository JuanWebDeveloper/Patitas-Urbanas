import { Fragment } from 'react';
import { LayoutModel } from '@/src/core/models';
import { RobotoCondensed } from '@/public/fonts';

export const Layout = ({ children }: LayoutModel) => {
 return (
  <Fragment>
   <main className={`${RobotoCondensed.variable} dark-theme`}>{children}</main>
  </Fragment>
 );
};
