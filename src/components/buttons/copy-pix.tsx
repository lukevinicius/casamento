'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export function CopyPIX() {
  const { toast } = useToast()

  function handleCopyPIX() {
    navigator.clipboard.writeText('(88) 98813-9063')

    toast({
      title: 'Chave PIX copiada',
      description: 'A chave PIX foi copiada para a área de transferência',
    })
  }

  return (
    <Button
      className="rounded-lg border-emerald-600 bg-zinc-50 p-2 text-emerald-700 hover:bg-zinc-200"
      onClick={handleCopyPIX}
    >
      Copiar chave PIX
    </Button>
  )
}
