import { fetchProducts } from '@/actions/fetch-products'

export async function Products() {
  const products = await fetchProducts()

  return (
    <div className="grid gap-2 md:grid-cols-2">
      {products &&
        products.map((product) => (
          <div key={product.id} className="w-full bg-zinc-200">
            <div className="mx-auto w-full max-w-fit space-y-2 p-2">
              <img
                src={product.photoUrl}
                alt={product.name}
                className="mx-auto h-48 w-full"
              />
              <div className="flex items-center justify-between">
                <p className="py-2 text-center font-semibold text-emerald-700">
                  {product.name}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
