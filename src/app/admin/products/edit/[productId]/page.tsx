import { getProductId } from '@/actions/get-product-by-id'
import { UpdateProductForm } from './form'

export default async function UpdateProduct({
  params,
}: {
  params: { productId: string }
}) {
  const { product } = await getProductId({ productId: params.productId })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-xl bg-zinc-700 p-4">
        <p className="text-2xl font-semibold text-zinc-100">
          Edição de Produto
        </p>
      </div>

      {product && <UpdateProductForm product={product} />}
    </div>
  )
}
