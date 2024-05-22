import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'restaurant-id',
    createdAt: new Date(),
    description: 'Restaurant description example',
    managerId: 'custom-user-id',
    name: 'Pizzashop Custom',
    updatedAt: null,
  })
})
