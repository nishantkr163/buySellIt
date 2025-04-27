"use client"

import CarouselCommon from './CarouselCommon'
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import slide1 from '../Images/slide1.png'
import slide1Feature1 from '../Images/slide1Feature1.png'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const HeroSection = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-screen" // Full screen width
      >
        <CarouselContent>
          <CarouselItem key='2' className="w-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex h-72">
                  <Image
                    src={slide1}
                    alt="Slide1"
                    width={190}
                    height={30}
                    className="h-fit"
                  />
                  <div className="flex flex-col w-2/5 justify-center">
                    <span className="text-pink-600 text-sm">Best Furniture For Your Castle...</span>
                    <span className="text-3xl font-bold">New Furniture Collection Trends in 2025</span>
                    <span className="text-gray-400 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</span>
                    <Button className="bg-pink-600 text-white rounded-none my-4 w-32">Shop now!</Button>
                  </div>
                  <Image
                    src={slide1Feature1}
                    alt="slide1Feature1"
                    width={250}
                    height={60}
                    className="h-fit m-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key='3' className="w-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex h-72">
                  <Image
                    src={slide1}
                    alt="Slide1"
                    width={190}
                    height={30}
                    className="h-fit"
                  />
                  <div className="flex flex-col w-2/5 justify-center">
                    <span className="text-pink-600 text-sm">Best Furniture For Your Castle...</span>
                    <span className="text-3xl font-bold">New Furniture Collection Trends in 2025</span>
                    <span className="text-gray-400 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</span>
                    <Button className="bg-pink-600 text-white rounded-none my-4 w-32">Shop now!</Button>
                  </div>
                  <Image
                    src={slide1Feature1}
                    alt="slide1Feature1"
                    width={250}
                    height={60}
                    className="h-fit m-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem key='4' className="w-full">
            <div className="p-1">
              <Card>
                <CardContent className="flex h-72">
                  <Image
                    src={slide1}
                    alt="Slide1"
                    width={190}
                    height={30}
                    className="h-fit"
                  />
                  <div className="flex flex-col w-2/5 justify-center">
                    <span className="text-pink-600 text-sm">Best Furniture For Your Castle...</span>
                    <span className="text-3xl font-bold">New Furniture Collection Trends in 2025</span>
                    <span className="text-gray-400 text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</span>
                    <Button className="bg-pink-600 text-white rounded-none my-4 w-32">Shop now!</Button>
                  </div>
                  <Image
                    src={slide1Feature1}
                    alt="slide1Feature1"
                    width={250}
                    height={60}
                    className="h-fit m-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default HeroSection