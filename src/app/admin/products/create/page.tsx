import { CreateProductForm } from './form'

export default function CreateProduct() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between rounded-xl bg-zinc-700 p-4">
        <p className="text-2xl font-semibold text-zinc-100">
          Criação de Produto
        </p>
      </div>

      <CreateProductForm />
    </div>
  )
}
