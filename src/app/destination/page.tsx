import {ReactElement} from 'react';
import Image from 'next/image';

import BaseLayout from '@/components/BaseLayout';
import MoonImage from '@/images/destination/image-moon.webp';
import EuropaImage from '@/images/destination/image-europa.webp';
import MarsImage from '@/images/destination/image-mars.webp';
import TitanImage from '@/images/destination/image-titan.webp';
import ContentWrapper from '@/components/ContentWrapper';

const destinations = [
  {
    image: MoonImage,
    alt: 'Moon image',
  },
  //   {
  //     image: MarsImage,
  //     alt: 'Mars image',
  //   },
  //   {
  //     image: EuropaImage,
  //     alt: 'Europa image',
  //   },
  //   {
  //     image: TitanImage,
  //     alt: 'Titan image',
  //   },
];

function Destination(): ReactElement {
  return (
    <BaseLayout className="bg-destinationImageMobile">
      <ContentWrapper>
        <div className="text-white">
          <h4>
            01<span></span>Pick your destination
          </h4>
          <div className="flex items-center justify-center overflow-hidden">
            {destinations.map(img => (
              <Image
                key={img.alt}
                className="w-44"
                src={img.image}
                alt={img.alt}
              />
            ))}
          </div>
        </div>
        <div className="flex text-white">
          <p>Moon</p>
          <p>Mars</p>
          <p>Europa</p>
          <p>Titan</p>
        </div>
        <div className="text-white">
          <h1>Moon</h1>
          <p>
            See our planet as you&apos;ve never seen it before. A perfect
            relaxing trip away to help regain perspective and come back
            refreshed. While you&apos;re there, take in some history by visiting
            the Luna 2 and Apollo 11 landing sites.
          </p>
        </div>
        <div />
        <div className="text-white">
          <p>Avg. distance</p>
          <h2>384,400 KM</h2>
          <p>Est. travel time</p>
          <h2>3 days</h2>
        </div>
      </ContentWrapper>
    </BaseLayout>
  );
}

export default Destination;
