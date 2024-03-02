'use client';

import {ReactElement, useState} from 'react';
import Image, {StaticImageData} from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';

import ContentWrapper from './ContentWrapper';

interface ICarousel {
  slides: {
    key: number;
    image: StaticImageData;
    title: string;
    text: string;
    distance: string;
    travelTime: string;
  }[];
}

function Carousel({slides}: ICarousel): ReactElement {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  let nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="grid">
      <div className="">
        <div className="overflow-hidden mb-7">
          <div
            className="grid grid-flow-col auto-cols-[100%] transition ease-out duration-700"
            style={{transform: `translateX(-${current * 100}%)`}}>
            {slides.map(img => (
              <div className="flex justify-center" key={img.title}>
                <Image className="w-44" src={img.image} alt={img.title} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between max-w-60 w-60 mx-auto">
          {slides.map((s, i) => (
            <div
              onClick={() => setCurrent(i)}
              key={'circle' + i}
              className="flex flex-col items-center font-barlowCondensed uppercase tracking-widest">
              <p
                className={`mb-1.5 ${
                  i === current ? 'text-spWhite' : 'text-spLilac'
                }`}>
                {s.title}
              </p>
              <div
                className={`w-9 h-[3px] ${
                  i === current ? 'bg-white' : 'hidden'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      <ContentWrapper>
        <div className="">
          {slides.map((t, i) =>
            i === current ? (
              <h1
                key={t.text}
                className="uppercase text-[3.5rem] font-belleFair text-center my-10">
                {t.title}
              </h1>
            ) : null,
          )}
          {slides.map((t, i) =>
            i === current ? (
              <p
                key={t.text}
                className="text-center text-[15px] font-barlow text-spLilac h-28">
                {t.text}
              </p>
            ) : null,
          )}
        </div>
        <div className="w-full h-px bg-[#979797] my-12" />
        <div className="flex flex-col  items-center uppercase">
          <p className="font-barlowCondensed text-[14px] mb-4">Avg. distance</p>
          <p className="font-belleFair text-[28px] mb-8">
            {slides.map((t, i) => (
              <span key={t.title}>{i === current && t.distance}</span>
            ))}{' '}
            KM
          </p>
          <p className="font-barlowCondensed text-[14px] mb-2">Avg. distance</p>
          <p className="font-belleFair text-[28px] mb-12">
            {slides.map((t, i) => (
              <span key={t.title}>{i === current && t.travelTime}</span>
            ))}{' '}
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Carousel;
