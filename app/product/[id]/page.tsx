'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { showcaseProducts } from '@/data/showcase-products'
import { ProductHeader } from '@/components/product/ProductHeader'
import { ProductDetailsLayout } from '@/components/product/ProductDetailsLayout'

export default function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  // ✅ unwrap the promise
  const { id } = React.use(params)
  const router = useRouter()

  const product = showcaseProducts.find((p) => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 text-center">
        <p className="text-black">Product not found.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 bg-primary text-black px-4 py-2 rounded hover:bg-secondary "
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 text-black bg-gradient-to-br from-green-50 via-white to-green-100">
      <ProductHeader product={product} onBack={() => router.back()} />
      <ProductDetailsLayout product={product} />
    </div>
  )
}
