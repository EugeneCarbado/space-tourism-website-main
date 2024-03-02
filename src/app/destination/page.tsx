'use client';

import {ReactElement} from 'react';

import BaseLayout from '@/components/BaseLayout';
import ContentWrapper from '@/components/ContentWrapper';
import MoonImage from '@/images/destination/image-moon.webp';
import EuropaImage from '@/images/destination/image-europa.webp';
import MarsImage from '@/images/destination/image-mars.webp';
import TitanImage from '@/images/destination/image-titan.webp';
import Carousel from '@/components/Carousel';

const destinations = [
  {
    key: 0,
    image: MoonImage,
    title: 'Moon',
    text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400',
    travelTime: '3 days',
  },
  {
    key: 1,
    image: MarsImage,
    title: 'Mars',
    text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil.',
    travelTime: '9 months',
  },
  {
    key: 2,
    image: EuropaImage,
    title: 'Europa',
    text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 Mil.',
    travelTime: '3 years',
  },
  {
    key: 3,
    image: TitanImage,
    title: 'Titan',
    text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 Bil.',
    travelTime: '7 years',
  },
];

function Destination(): ReactElement {
  return (
    <BaseLayout className="bg-destinationImageMobile text-white text-base tracking-widest">
      <ContentWrapper className="">
        <h4 className="mb-8 text-center font-barlowCondensed uppercase">
          <span className="text-[#4D4F57] mr-2">01 </span>Pick your destination
        </h4>
      </ContentWrapper>
      <Carousel slides={destinations} />
    </BaseLayout>
  );
}

export default Destination;
