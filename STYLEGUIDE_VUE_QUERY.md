# Vue Query Style Guide

Exemplo de query:
```ts
// api/orders/queries.ts
import { useQuery } from '@tanstack/vue-query'
import type { Order } from '~/types/entities' // Entidade com UUID em app/types/entities

// Response complexa definida no arquivo de query para não poluir as entidades
export interface OrdersResponse {
  data: Order[]
  meta: {
    total: number
    currentPage: number
  }
}

export const useOrders = (page: number) => {
  return useQuery({
    queryKey: ['orders', page],
    queryFn: (): Promise<OrdersResponse> => $fetch('/api/orders', { query: { page } })
  })
}
```

Exemplo de mutation:

```ts
// api/users/mutations.ts
import type { User } from '~/types/entities'
import { useMutation } from '@tanstack/vue-query'

// DTO vive no arquivo da mutation
export interface CreateUser {
  name: string
  email: string
}

export const useCreateUser = () => {
  return useMutation({
    mutationFn: (data: CreateUser): Promise<User> => $fetch('/api/users', { method: 'POST', body: data })
  })
}
```

### 1. Gestão de Tipos (Entities vs DTOs)

- **Entities**: Tudo que possui `uuid` vindo da API é uma entidade e deve residir em `app/types/entities`.
- **DTOs**: Objetos passados para mutations são DTOs. Devem viver no mesmo arquivo da mutation e seguir o nome dela (ex: `useCreateUser` -> `CreateUser`).
- **Responses Complexas**: Tipos de resposta de listagem ou objetos compostos devem ser definidos dentro do arquivo de `queries.ts` para não poluir as entidades.

### 2. Nomenclatura (Padrão Apollo)

- **Queries**: `useUser` (singular) para entidade única; `useUsers` (plural) para listagens.
- **Mutations**: `useAcaoRecurso` (ex: `useCreateUser`, `useUpdateOrder`).

### 3. Organização de Arquivos

- **Localização**: Hooks centralizados obrigatoriamente em `/api/<recurso>/`.
- **Separação**: `/queries.ts` para buscas e `/mutations.ts` para escritas.