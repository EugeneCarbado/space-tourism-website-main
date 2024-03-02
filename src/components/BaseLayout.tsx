'use client';
import {ReactElement, ReactNode} from 'react';

import NavigationMobile from './NavigationMobile';

interface IBaseLayout {
  children: ReactNode;
  className: string;
}

function BaseLayout({children, className}: IBaseLayout): ReactElement {
  return (
    <main className={`${className}`}>
      <section>
        <NavigationMobile />
      </section>
      <section>{children}</section>
    </main>
  );
}

export default BaseLayout;
