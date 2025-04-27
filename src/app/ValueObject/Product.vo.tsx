export interface Products {
    id: number
    mainImage: string
    otherImages: string[]
    title: string
    description: string
    category: string
    price: number
    state: string
    city: string
    sellerId: number
    createdAt: Date
    updatedAt: Date
    status: 'available' | 'sold' | 'pending'
  }