# Api

Composables (Hooks do Vue) para comunicação com API

### Glossário

- **Vue Query**: É uma biblioteca do Vue que ajuda a gerenciar a comunicação com APIs

- **Query**: A Query é para buscar dados. Pense nela como uma pergunta que seu aplicativo faz à API, tipo "me mostre a lista de produtos". Ela só serve para ler dados e não muda nada no servidor.

- **Mutation**: A Mutation é para mudar dados. Ela é a ação de enviar informações para a API, como "crie um novo usuário" ou "atualize os dados do produto". Ela sempre altera algo no servidor.

- **Query vs Mutation**: Query é o `GET`, mutation é todo resto: `PATCH`, `PUT`, `POST` e `DELETE`

- **GraphQL**: É uma linguagem de consulta de dados para APIs. Nós não usamos ela, mas o Vue Query é baseado na sua organização

- **Recurso**: Um recurso é um "objeto" ou um "assunto" principal que você está manipulando na sua API. Por exemplo, Usuários, Produtos, Pedidos, etc. Pense nisso como as "pastas" que agrupam seus dados.

- **Subrecurso**: É um recurso que está "dentro" de outro. Por exemplo, as funções de um usuário (users/roles) ou as imagens de um produto (products/images).

- **Entidades**: As entidades representam a "forma" dos dados que a sua **API retorna**. Elas definem os tipos de dados que um objeto possui, como um id, um nome, ou uma data. No seu projeto, as entidades devem ser salvas no arquivo types/entities.ts.

- **DTOs**: Um DTO é como uma "versão" de uma entidade, mas que é usada para **enviar dados** para a API (nas mutations). 

### Regras

1. A biblioteca utilizada será o Vue Query (oficialmente `@tanstack/vue-query`)
2. Os arquivos devem ser divididos entre `queries.ts` e `mutations.ts`
```bash
/api
 ├─ queries.ts
 └─ mutations.ts
```

3. Para projetos várias rotas, as queries e mutations devem ser agrupadas por pastas
```bash
/api
 ├─ users
 │   ├─ queries.ts
 │   └─ mutations.ts
 └─ products
     ├─ queries.ts
     └─ mutations.ts
```

4. O nome das pastas devem seguir o nome das rotas
```bash
# POST /products/new
/api
 ├─ ...
 └─ products
     ├─ ...
     └─ new
         ├─ mutations.ts
         └─ ...
```

5. O nome dos composables devem seguir o seguinte padrão de nomemclatura:
```typescript
// queries use<Recurso> ou use<RecursoSubrecurso>
export function useUsers() { ... } // api/users/queries.ts
export function useUsersRoles() { ... }  // api/users/roles/queries.ts
```

```typescript
// mutations use<Ação><Recurso> ou use<Ação><Recurso><Subrecurso>
export function useCreateUser() { ... } // api/users/mutations.ts
export function useUpdateUser() { ... } // api/users/mutations.ts
export function useUpdateUserRole() { ... } // api/users/roles/mutations.ts
```

6. As entidades devem criadas apenas em `types/entities.ts`, enquanto os DTOs devem estar junto com suas mutations
```typescript
interface CreateUser { // ou CreateUserDTO
  name: string;
  age: number;
  sex: "male" | "female"
} 

function createUser() {
  return useMutation({
    mutationFn: (data: CreateUser) => { ... }
  })
}
```

### Referêncioas

[Documentação do Vue Query](https://tanstack.com/query/latest/docs/framework/vue/overview)  
[Queries do GraphQL](https://graphql.org/learn/queries/)