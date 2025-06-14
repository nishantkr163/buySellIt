import React from 'react'
import freeDelivery from '../assets/freeDeliveryFull.png'
import refundMoney from '../assets/refundMoney.png'
import support from '../assets/support.png'
import premiumInspection from '../assets/premiumInspection.png'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

let data = [
  {
    id: 1,
    iconLogo: freeDelivery,
    title: "Free Delivery",
    description: "Enjoy free delivery on selected products."
  },
  {
    id: 2,
    iconLogo: refundMoney,
    title: "Secure Transactions",
    description: "Fast, safe, and easy payment process."
  },
  {
    id: 3,
    iconLogo: premiumInspection,
    title: "Quality Assurance",
    description: "Every product is thoroughly inspected before listing."
  },
  {
    id: 4,
    iconLogo: support,
    title: "24/7 Customer Support",
    description: "Friendly support team available around the clock."
  },
]

const WhatWeOffer = () => {
  return (
    <div className='mt-20 mb-14'>
      <div className='text-4xl text-center font-bold mb-8'>What We Offer!</div>
      <div className='flex gap-10 justify-center'>
        {
          data.map((ele) => (
            <Card key={ele.id} className='d-flex w-60 shadow-lg'>
              <CardContent className="h-80 w-60 flex flex-col gap-12 rounded-md items-center justify-center">
                <Image
                  src={ele.iconLogo}
                  alt={ele.title}
                />
                <h2 className='font-bold'>{ele.title}</h2>
                <p className='text-center'>{ele.description}</p>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default WhatWeOffer

