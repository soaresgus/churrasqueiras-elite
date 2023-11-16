import { BannerCarousel } from '@/components/BannerCarousel';
import { Categories } from '@/components/Categories';

export default function Home() {
  return (
    <section className="flex">
      <Categories />
      <BannerCarousel />
    </section>
  );
}
