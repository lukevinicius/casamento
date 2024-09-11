import { prisma } from '@/lib/prisma'

export async function fetchProducts() {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'asc',
    },
    select: {
      id: true,
      name: true,
      photoUrl: true,
      User: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  })

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    photoUrl: product.photoUrl,
    userId: product.User?.id || null,
    userName: product.User?.name || null,
  }))
}

export const revalidate = 0
