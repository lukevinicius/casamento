'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

interface IRequest {
  productId: string
  name: string
  photoUrl: string
}

export async function updateProduct({ productId, name, photoUrl }: IRequest) {
  try {
    await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name,
        photoUrl,
      },
    })

    revalidatePath('/admin/products')
  } catch (e) {
    console.log('error', e)
    return {
      error: 'Erro ao criar produto',
    }
  }

  return {}
}
