'use server'

import { prisma } from '@/lib/prisma'

interface IResponse {
  error?: string
  product?: {
    id: string
    name: string
    photoUrl: string
  }
}

export async function getProductId({
  productId,
}: {
  productId: string
}): Promise<IResponse> {
  try {
    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    })

    if (!product) {
      return {
        error: 'Produto não encontrado',
      }
    }

    return { product }
  } catch (error) {
    return {
      error: 'Erro ao buscar produto',
    }
  }
}
