# Assets

A pasta assets é utilizada para armazenar recursos estáticos do projeto Vue, como imagens, fontes, ícones, arquivos de áudio, vídeos e arquivos CSS ou SCSS que não são componentes diretamente ligados à lógica da aplicação.

### Regras

1. Organize por tipo
- `images/`: imagens do projeto (PNG, JPG, SVG, etc.)
- `fonts/`: arquivos de fontes personalizadas (TTF, OTF, WOFF, etc.)
- `icons/`: ícones vetoriais ou PNG usados na interface
- `styles/`: arquivos CSS/SCSS globais, variáveis ou mixins

2. Use kebab-case para nomes de arquivos: `background-image.png`
3. Evite o uso de icones. Use `@nuxt/icons` já instalado no projeto