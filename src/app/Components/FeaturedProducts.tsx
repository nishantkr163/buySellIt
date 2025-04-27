import React from 'react'
import { MultiTilesCarousel } from './MultiTilesCarousel'
import { featuredProducts } from '../Data/FeaturedProducts'

const FeaturedProducts = () => {

    const products = featuredProducts; 
  return (
    <>
        <div className='w-full p-14 flex justify-center flex-col items-center gap-7'>
            <span style={{ color : '#1A0B5B' }} className='text-2xl font-bold flex justify-center'>Featured Products</span>
            <MultiTilesCarousel items={featuredProducts} />
        </div>
    </>
  )
}

export default FeaturedProducts