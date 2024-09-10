'use client'

import { selectProduct } from '@/actions/select-product'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { Loader2 } from 'lucide-react'
import { useTransition } from 'react'

interface HelpDialogProps {
  product: {
    id: string
    name: string
    userId: string | null
  }
}

export function HelpDialog({ product }: HelpDialogProps) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  function handleSelectProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const { name, email, phone } = e.currentTarget.elements as any
    startTransition(async () => {
      const { error } = await selectProduct({
        name: name.value,
        email: email.value,
        phone: phone.value,
        productId: product.id,
      })

      if (error) {
        toast({
          title: 'Erro!',
          description: 'Ocorreu um erro ao presentear!',
          variant: 'destructive',
        })
      } else {
        toast({
          title: 'Sucesso!',
          description: 'Obrigado por nos presentear!',
        })
      }
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={product.userId !== null}
          className="w-full border-emerald-700 bg-emerald-500 text-zinc-50 hover:bg-emerald-600"
        >
          {product.userId ? 'Foi presenteado!' : 'Presentear!'}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-emerald-700 text-zinc-50 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSelectProduct} className="space-y-2">
          <input
            className="w-full rounded border border-zinc-300 px-3 py-2 text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            type="text"
            name="name"
            placeholder="Seu nome"
          />
          <input
            className="w-full rounded border border-zinc-300 px-3 py-2 text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            type="text"
            name="email"
            placeholder="Seu email"
          />
          <input
            className="w-full rounded border border-zinc-300 px-3 py-2 text-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            type="text"
            name="phone"
            placeholder="Seu telefone"
          />

          <Button
            className="w-full border-emerald-700 bg-emerald-500 font-semibold text-zinc-50 hover:bg-emerald-600"
            type="submit"
          >
            {isPending ? (
              <Loader2 className="mx-auto h-6 w-6 animate-spin" />
            ) : (
              'Presentear!'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
