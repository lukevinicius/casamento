import { Button } from '@/components/ui/button'
import { PenSquareIcon } from 'lucide-react'
import Link from 'next/link'

export function EditButtom({ productId }: { productId: string }) {
  return (
    <Link href={`/admin/products/edit/${productId}`}>
      <Button
        size="sm"
        className="bg-yellow-600 text-zinc-100 hover:bg-yellow-700"
      >
        <PenSquareIcon />
      </Button>
    </Link>
  )
}
