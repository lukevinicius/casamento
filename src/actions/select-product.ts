'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

interface IRequest {
  name: string
  email: string
  phone: string
  productId: string
}

export async function selectProduct({
  name,
  email,
  phone,
  productId,
}: IRequest) {
  try {
    const user = await prisma.user.upsert({
      where: { email },
      create: {
        name,
        email,
        phone,
      },
      update: {},
    })

    await prisma.product.update({
      where: { id: productId },
      data: {
        userId: user.id,
      },
    })

    revalidatePath('/')
  } catch (error) {
    return {
      error: 'Ocorreu um erro',
    }
  }

  return {}
}
