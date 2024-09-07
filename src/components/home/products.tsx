import { fetchProducts } from '@/actions/fetch-products'

export async function Products() {
  const products = await fetchProducts()

  return (
    <div className="mx-auto grid grid-cols-2 gap-2 md:grid-cols-4">
      {products &&
        products.map((product) => (
          <div key={product.id} className="mx-auto">
            <div className="max-w-fit space-y-2 bg-zinc-200 p-2">
              <img src={product.photoUrl} alt={product.name} className="w-64" />
              <div className="flex items-center justify-between">
                <p className="py-2 font-semibold">{product.name}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
