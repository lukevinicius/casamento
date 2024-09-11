import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

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
      <Table>
        <TableHeader>
          <TableRow className="bg-zinc-900">
            <TableHead className="text-center text-zinc-50">Imagem</TableHead>
            <TableHead className="text-center text-zinc-50">Produto</TableHead>
            <TableHead className="text-center text-zinc-50">
              Quem dará
            </TableHead>
            <TableHead className="text-center text-zinc-50">Email</TableHead>
            <TableHead className="text-center text-zinc-50">Telefone</TableHead>
            <TableHead className="text-center text-zinc-50">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products &&
            products.map((product) => (
              <TableRow
                key={product.id}
                className="bg-zinc-700 text-center text-zinc-50"
              >
                <TableCell className="font-medium">
                  <img
                    src={product.photoUrl}
                    alt={product.name}
                    className="w-32"
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.userName}</TableCell>
                <TableCell>{product.userEmail}</TableCell>
                <TableCell>{product.userPhone}</TableCell>
                <TableCell className="space-x-2">
                  <EditButtom productId={product.id} />
                  <DeleteButtom
                    productId={product.id}
                    photoUrl={product.photoUrl}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}
