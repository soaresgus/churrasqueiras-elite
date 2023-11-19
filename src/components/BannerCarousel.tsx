'use client';
import Image from 'next/image';
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { app } from '@/lib/firebase/firebase';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

async function getCarouselImagesUrl() {
  const storage = getStorage(app);
  const storageRef = ref(storage, '/banner');

  const result = await listAll(storageRef);
  const files = await Promise.all(
    result.items.map(async (item) => {
      const url = await getDownloadURL(item);

      return url;
    })
  );

  return files;
}

export function BannerCarousel() {
  const [files, setFiles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  function runPlayingTimer() {
    setIsPlaying(false);

    setTimeout(() => {
      setIsPlaying(true);
    }, 1 * 1000);
  }

  useEffect(() => {
    setIsLoading(true);

    getCarouselImagesUrl()
      .then((files) => {
        setFiles(files);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section className="pt-10 pl-[45px]">
        <Skeleton width={892} height={344} />
      </section>
    );
  }

  return (
    <section className="pt-10 pl-[45px]">
      <CarouselProvider
        naturalSlideWidth={892}
        naturalSlideHeight={344}
        totalSlides={files.length}
        className="w-[892px] h-[344px] relative"
        dragEnabled={false}
        isPlaying={isPlaying}
        infinite>
        <Slider>
          {files.map((url, index) => (
            <Slide index={index} key={url}>
              <Image
                src={url}
                alt={`Banner ${index}`}
                width={892}
                height={344}
                className="w-[inherit] h-[inherit]"
              />
            </Slide>
          ))}
        </Slider>
        <div className="flex items-center gap-3 absolute bottom-3 left-1/2 -translate-x-1/2">
          {files.map((_, index) => (
            <Dot
              slide={index}
              key={index}
              className="block w-3 h-3 bg-white enabled:opacity-50 rounded-full disabled:w-[14px] disabled:h-[14px] disabled:bg-[#DB4444] disabled:border-2 disabled:border-white"
              onClick={() => {
                runPlayingTimer();
              }}
            />
          ))}
        </div>
      </CarouselProvider>
    </section>
  );
}
