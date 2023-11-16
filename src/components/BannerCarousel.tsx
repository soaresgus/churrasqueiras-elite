'use client';
import Image from 'next/image';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { BannerCarouselItem } from './BannerCarouselItem';

export function BannerCarousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={892}
      naturalSlideHeight={344}
      totalSlides={4}
      className="w-[892px] h-[344px]"
      dragEnabled={false}>
      <Slider>
        <BannerCarouselItem index={0} />
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}
