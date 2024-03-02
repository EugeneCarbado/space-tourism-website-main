import Image from 'next/image';
import Link from 'next/link';

import BaseLayout from '@/components/BaseLayout';
import ContentWrapper from '@/components/ContentWrapper';

export default function Home() {
  return (
    <BaseLayout className="bg-homeImageMobile bg-cover bg-no-repeat h-[100dvh]">
      <ContentWrapper>
        <div className="text-white flex flex-col items-center text-center py-6">
          <p className="uppercase font-barlowCondensed tracking-widest mb-4 font-normal">
            So, you want to travel to
          </p>
          <h1 className="text-[80px] font-belleFair uppercase mb-4">Space</h1>
          <p className="font-barlow text-[15px] mb-20">
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          <div className="bg-spWhite w-[150px] h-[150px] flex items-center justify-center rounded-full">
            <Link href="/destination">
              <h3 className="text-spBlack font-belleFair text-xl uppercase">
                Explore
              </h3>
            </Link>
          </div>
        </div>
      </ContentWrapper>
    </BaseLayout>
  );
}
