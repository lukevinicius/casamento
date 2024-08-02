'use client'

import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SingleImageDropzone } from '@/components/single-image-dropzone'
import { useEdgeStore } from '@/lib/edgestore'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/form'
import { createProduct } from '@/actions/create-product'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Nome do produto deve ter no mínimo 2 caracteres',
  }),
})

export function CreateProductForm() {
  const router = useRouter()
  const { edgestore } = useEdgeStore()
  const [file, setFile] = useState<File>()

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  const { isSubmitting } = form.formState

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await edgestore.publicFiles.upload({
      file: file as File,
    })

    const { error } = await createProduct({
      name: values.name,
      photoUrl: res.url,
    })

    if (error) {
      await edgestore.publicFiles.delete({ url: res.url })
      alert(error)
    } else {
      router.push('/admin/products')
    }
  }

  return (
    <div className="rounded-xl bg-zinc-700 p-4">
      <SingleImageDropzone
        width={200}
        height={200}
        value={file}
        onChange={(file) => {
          setFile(file as File)
        }}
      />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Form.Field>
            <Form.Label htmlFor="name">Nome do produto</Form.Label>
            <Form.Input id="name" name="name" />
            <Form.ErrorMessage field="name" />
          </Form.Field>

          <Button
            type="submit"
            className="bg-emerald-600 text-zinc-100 hover:bg-emerald-700"
          >
            {isSubmitting ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              'Criar'
            )}
          </Button>
        </form>
      </FormProvider>
    </div>
  )
}
