import { fetchProducts } from '@/actions/fetch-products'
import { HelpDialog } from '../help-dialog'
import { CopyPIX } from '../buttons/copy-pix'

export async function Products() {
  const products = await fetchProducts()

  return (
    <div className="grid gap-2">
      {products &&
        products.map((product) => (
          <div key={product.id} className="w-full bg-zinc-200">
            <div className="mx-auto w-full space-y-2 p-2">
              <img
                src={product.photoUrl}
                alt={product.name}
                className="mx-auto h-48 w-full"
              />
              <p className="py-2 text-center font-semibold text-emerald-700">
                {product.name}
              </p>
              <div className="space-y-2">
                <HelpDialog product={product} />
                {!product.userId && <CopyPIX title="Vou ajudar com um PIX" />}
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
