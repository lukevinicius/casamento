import { fetchProducts } from '@/actions/fetch-products'
import { DeleteButtom } from './delete-buttom'
import { CreateButtom } from './create-buttom'
import { EditButtom } from './edit-buttom'

export default async function Products() {
  const products = await fetchProducts()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-xl bg-zinc-700 p-4">
        <p className="text-2xl font-semibold text-zinc-100">Produtos</p>
        <CreateButtom />
      </div>
      <div className="grid gap-2 rounded-xl bg-zinc-700 p-4 md:grid-cols-4">
        {products &&
          products.map((product) => (
            <div key={product.id} className="mx-auto">
              <div className="max-w-fit space-y-2 bg-zinc-200 p-2">
                <img
                  src={product.photoUrl}
                  alt={product.name}
                  className="w-64"
                />
                <div className="flex items-center justify-between">
                  <p className="py-2 font-semibold">{product.name}</p>
                  <div className="space-x-2">
                    <EditButtom productId={product.id} />
                    <DeleteButtom
                      productId={product.id}
                      photoUrl={product.photoUrl}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
