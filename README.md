# Nuxt v4 - NxT

NxT é um template para projetos Nuxt.js com configurações pré-definidas para facilitar o desenvolvimento de aplicações web.

## Instalação

### Instalação de Dependências

Após copiar o projeto, instale as dependências. Você pode usar qualquer gerenciador de pacotes, porém recomendamos o `bun`:

```bash
bun install
```

Para iniciar o servidor de desenvolvimento, use o seguinte comando:

```bash
bun run dev
```

## Dependências

- [`Axios`](https://axios-http.com/)
- [`Prettier`](https://prettier.io/)
- [`Tailwind Intellisense`](https://github.com/tailwindlabs/tailwindcss-intellisense)
- [`Tailwind`](https://tailwindcss.com/)
- [`Volt`](https://volt.primevue.org/)
- [`Zod`](https://zod.dev/v4)
- [`@nuxt/eslint`](https://eslint.nuxt.com/)
- [`@nuxt/icon`](https://nuxt.com/modules/icon)
- [`@pinia/nuxt`](https://pinia.vuejs.org/)
- [`@tanstack/vue-query`](https://tanstack.com/query/latest/docs/framework/react/overview)
- [`@vueuse/nuxt`](https://vueuse.org/guide/)

## Estrutura de Pastas

A estrutura de pastas segue o padrão do Nuxt.js, com algumas adições e modificações para facilitar o desenvolvimento. A seguir, uma breve descrição de cada pasta:

> [!TIP]
> Para mais informações sobre a estrutura de pastas, consulte a documentação do [Nuxt](https://nuxt.com/docs/4.x/guide).

- `app/assets` - Arquivos estáticos como imagens, fontes e estilos globais
- `app/components` - Componentes Vue reutilizáveis
- `app/composables` - Composables para compartilhar lógica entre componentes
- `app/layouts` - Layouts globais da aplicação
- `app/middleware` - Middlewares para controlar o acesso às rotas
- `app/pages` - Páginas da aplicação
- `app/plugins` - Plugins Nuxt.js e de terceiros
- `app/utils` - Funções utilitárias e constantes

Outras pastas são ou serão inclusas conforme a necessidade do projeto.

- `app/api` - Serviços para comunicação com APIs
- `app/schemas` - Esquemas de validação de dados