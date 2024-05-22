import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'Jonh Doe',
      email: 'jonhdoe@example.com',
      phone: '1940950923',
      role: 'manager',
      updatedAt: null,
      createdAt: new Date(),
    })
  },
)
