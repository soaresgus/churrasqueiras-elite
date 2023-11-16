/* eslint-disable react/display-name */
import { app } from '@/lib/firebase/firebase';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import Image from 'next/image';
import { Slide, SlideProps } from 'pure-react-carousel';

interface BannerCarouselItemsProps extends SlideProps {}

export async function BannerCarouselItem(props: BannerCarouselItemsProps) {
  const storage = getStorage(app);
  const storageRef = ref(storage, '/banner');

  const result = await listAll(storageRef);
  const files = await Promise.all(
    result.items.map(async (item) => {
      const url = await getDownloadURL(item);

      return url;
    })
  );

  return files.map((url, index) => (
    <Slide {...props} key={url}>
      <Image
        src={url}
        alt={`Banner ${index}`}
        width={892}
        height={344}
        className="w-[inherit] h-[inherit]"
      />
    </Slide>
  ));
}
