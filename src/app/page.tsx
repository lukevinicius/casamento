import { Products } from '@/components/home/products'
import { ChevronsDown } from 'lucide-react'
import Image from 'next/image'
import conviteImg from '@/assets/convite.png'
import { ConfirmButton } from '@/components/buttons/confirm-button'

import { CopyPIX } from '@/components/buttons/copy-pix'

export default function Home() {
  return (
    <div className="h-full bg-white">
      <div className="mx-auto md:max-w-96">
        <div className="h-full">
          <Image src={conviteImg} alt="Convite" />
          <div className="mx-4 flex h-full justify-center rounded-t-xl bg-emerald-700 p-4 text-center text-zinc-50">
            <div className="space-y-4">
              <p className="text-lg">Gostaria de confirmar sua presença?</p>
              <ChevronsDown className="mx-auto h-12 w-12 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-full md:max-w-96">
        <div className="mx-4 flex h-full justify-center bg-emerald-700 px-4 pb-4 text-center text-zinc-50">
          <div className="space-y-6">
            <ConfirmButton />
            <p>
              Sua presença é o nosso maior presente, pois a maior alegria da
              nossa jornada tem sido compartilhar cada momento com as pessoas
              que amamos e se desejar nos presentear contribuindo para a
              construção do nosso novo lar, qualquer gesto será recebido com
              muito carinho e gratidão!
            </p>
            <div>
              <p className="font-semibold">CHAVE PIX: (88) 98813-9063</p>
              <p>Banco: Nubank</p>
              <p>Nome: Lucas vinicius alencar alves</p>
            </div>
            <CopyPIX />
            <p>
              Para aqueles que desejarem nos presentear, criamos uma lista com
              algumas sugestões que nos ajudarão muito a construir nosso novo
              lar e nos proporcionar uma lua de mel inesquecível. Fiquem à
              vontade para escolher o que acharem mais especial!
            </p>

            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}
