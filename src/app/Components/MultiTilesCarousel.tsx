import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"


export function MultiTilesCarousel({ items }: { items: any[] }) {
  return (
    <div>
      <Carousel className="w-full max-w-sm">
        <CarouselContent className="">
          {items.map((element, index) => (
            <CarouselItem key={index} className="lg:basis-2/3 lg:basis-2/3">
              <div>
                <Card>
                  <CardContent className="flex flex-col aspect-square items-center justify-center">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                      src={element.mainImage}
                      alt={element.id}
                    />
                    <div className="flex flex-col gap-3 items-center hover:bg-blue-800 group hover:text-white h-full w-full p-3 duration-200">
                      <span className="text-pink-600 font-semibold group-hover:text-white">{element.title}</span>
                      <span className="text-sm font-semibold">{element.category}</span>
                      <span className="text-sm font-semibold">₹{element.price}/-</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
