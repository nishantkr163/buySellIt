import Header from '../app/Components/Header'
import FeaturedProducts from './Components/FeaturedProducts';
import HeroSection from './Components/HeroSection';
import Latestproduct from './Components/Latestproduct';
import { MultiTilesCarousel } from './Components/MultiTilesCarousel';
import WhatWeOffer from './Components/WhatWeOffer';
import { featuredProducts } from './Data/FeaturedProducts';

export default function Home() {
  return (
    <div style={{ overflow : "hidden" }}>
      <Header />
      <HeroSection />
      <Latestproduct items={featuredProducts}  />
      <WhatWeOffer />
    </div>
  );
}
