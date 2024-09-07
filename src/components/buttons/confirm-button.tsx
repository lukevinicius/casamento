import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ConfirmButton() {
  return (
    <Link href="https://wa.me/5588988139063?text=Ol%C3%A1!%20Gostaria%20de%20confirmar%20minha%20presen%C3%A7a%20no%20casamento%20de%20voc%C3%AAs%F0%9F%98%80">
      <Button className="rounded-lg border-emerald-600 bg-zinc-50 p-2 text-emerald-700 hover:bg-zinc-200">
        Confirmar presença
      </Button>
    </Link>
  )
}
