'use client'

import { deleteProduct } from '@/actions/delete-buttom'
import { Button } from '@/components/ui/button'
import { useEdgeStore } from '@/lib/edgestore'
import { Trash } from 'lucide-react'

export function DeleteButtom({
  productId,
  photoUrl,
}: {
  productId: string
  photoUrl: string
}) {
  const { edgestore } = useEdgeStore()

  async function handleDeleteProduct() {
    await edgestore.publicFiles.delete({ url: photoUrl })
    await deleteProduct({ productId })
  }

  return (
    <Button
      size="sm"
      className="bg-red-600 text-zinc-100 hover:bg-red-700"
      onClick={handleDeleteProduct}
    >
      <Trash />
    </Button>
  )
}
