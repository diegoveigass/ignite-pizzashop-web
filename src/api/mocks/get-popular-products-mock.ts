import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Produto 1', amount: 412 },
    { product: 'Produto 2', amount: 14 },
    { product: 'Produto 3', amount: 444 },
    { product: 'Produto 4', amount: 573 },
    { product: 'Produto 5', amount: 57 },
    { product: 'Produto 6', amount: 98 },
  ])
})
