'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

interface IRequest {
  productId: string
}

export async function deleteProduct({ productId }: IRequest) {
  try {
    await prisma.product.delete({
      where: {
        id: productId,
      },
    })

    revalidatePath('/admin/products')
  } catch (e) {
    return {
      error: 'Erro ao criar produto',
    }
  }

  return {}
}
