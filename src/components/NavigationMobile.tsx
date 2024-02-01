'use client';

import {ReactElement, useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SpaceLogo from '@/images/icons/logo.svg';
import Hamburger from '@/images/icons/icon-hamburger.svg';
import CloseIcon from '@/images/icons/icon-close.svg';

import ContentWrapper from './ContentWrapper';

function NavigationMobile(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
  });

  return (
    <div className="relative">
      <ContentWrapper className="py-6">
        <nav className="flex justify-between items-center">
          <Link href={'/home'}>
            <Image src={SpaceLogo} alt="Space logo" priority />
          </Link>
          <div onClick={() => setIsOpen(!isOpen)}>
            <Image src={Hamburger} alt="Hamburger image" />
          </div>
        </nav>
      </ContentWrapper>
      <div
        ref={menuRef}
        className={`absolute w-[70vw] backdrop-blur-md px-6 z-40 top-0 h-[100dvh] transition-all ease-in-out delay-300 ${
          !isOpen ? 'hidden' : 'right-0'
        }`}>
        <nav className="py-9 flex justify-end">
          <div className="py-px" onClick={() => setIsOpen(!isOpen)}>
            <Image src={CloseIcon} alt="Hamburger image" />
          </div>
        </nav>
        <div className="text-white font-barlowCondensed text-base uppercase tracking-widest p-8">
          <Link className="z-60" href="/home">
            <p className="mb-8">
              <span className="font-bold mr-1">00 </span>home
            </p>
          </Link>
          <Link className="z-60" href="/destination">
            <p className="mb-8">
              <span className="font-bold mr-1">01 </span>destination
            </p>
          </Link>
          <Link className="z-60" href="/crew">
            <p className="mb-8">
              <span className="font-bold mr-1">02 </span>crew
            </p>
          </Link>
          <Link className="z-60" href="/technology">
            <p>
              <span className="font-bold mr-1">03 </span>technology
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationMobile;
