import Header from '../app/Components/Header'
import FeaturedProducts from './Components/FeaturedProducts';
import HeroSection from './Components/HeroSection';
import { MultiTilesCarousel } from './Components/MultiTilesCarousel';

export default function Home() {
  return (
    <div style={{ overflow : "hidden" }}>
      <Header />
      <HeroSection />
      <FeaturedProducts />
    </div>
  );
}
