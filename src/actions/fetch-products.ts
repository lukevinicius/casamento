import { prisma } from '@/lib/prisma'

export async function fetchProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  })

  return products
}
