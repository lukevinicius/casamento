import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'

export function CreateButtom() {
  return (
    <Link href="/admin/products/create">
      <Button className="bg-emerald-600 text-zinc-100 hover:bg-emerald-700">
        <Plus /> Adicionar
      </Button>
    </Link>
  )
}
