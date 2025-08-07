// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default withNuxt([
  {
    rules: {
      "vue/multi-word-component-names": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
  eslintConfigPrettier,
]);
