'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

interface IRequest {
  name: string
  photoUrl: string
}

export async function createProduct({ name, photoUrl }: IRequest) {
  try {
    await prisma.product.create({
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
