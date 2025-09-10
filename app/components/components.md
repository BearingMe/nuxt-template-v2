 # Components

Componentes são pipipi popo. Em nuxt, eles são importados automaticamente de acordo com sua pasta e nome. 

### Glossário

- **Componente global**: Componente disponível em toda a aplicação sem importação manual.  
- **Pastas aninhadas**: Estrutura de diretórios para organizar componentes relacionados.  
- **Prefixo**: Primeira parte do nome do componente que indica seu grupo ou uso.  

### Regras  
  
1. Use PascalCase (ex. `HomeButton`) para o nome dos componentes  
2. Todo componente deve ser mais de uma palavra em seu nome. A primeira palavra indica seu uso  
```html
<!-- usado apenas na home -->
<HomeButton /> 
<!-- usado apenas em listas -->
<ListButton />
<!-- usado para toda ui -->
<UiButton />
```  
  
3. Componentes base (globais) sempre começam com a palavra Ui (ex. `UiButton`) ou App (ex. `AppButton`)  
4. Use pastas aninhadas para agrupar componentes relacionados  
```bash
components/
├── form/
│   ├── FormText.vue
│   ├── FormSelect.vue
│   └── FormDatetime.vue
├── button/
│   ├── ButtonPrimary.vue
│   ├── ButtonSecondary.vue
│   └── ButtonOutline.vue
```  
  
5. O nome da pasta deve ser o mesmo nome do prefixo para facilitar a utilização dos componentes
```bash
├── form/
│   ├── FormText.vue # disponível como <FormText />

├── forms/
│   ├── FormText.vue # disponível como <FormsFormText>
```

> [!IMPORTANT]
> Arquivo em components/ são auto-importados. Se o prefixo do arquivo coincidir com o nome da pasta, o Nuxt registra apenas o nome do componente (FormText.vue → <FormText />). Se forem diferentes, concatena pasta e arquivo (Forms/FormText.vue → <FormsFormText />). Alinhar nomes evita confusão.

6. As tags do arquivo `.vue` devem seguir a ordem `script`, `template` então `style`
```html
<script> ... <script /> 
<template> ... <template />
<style> ... <style />
```

### Referências

[Nuxt Components](https://nuxt.com/docs/4.x/guide/directory-structure/app/components)  
[Vue Style Guide](https://vuejs.org/style-guide/)
