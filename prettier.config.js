// Read about how to use Prettier configuration
// https://prettier.io/docs/en/configuration

/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */

/** @type {PrettierConfig | SortImportsConfig | TailwindConfig} */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  quoteProps: 'consistent',
  trailingComma: 'none',
  plugins: [
    'prettier-plugin-astro',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  importOrder: [
    '^(react/(.*)$)|^(react$)', // react core
    '^(astro/(.*)$)|^(astro$)', // astro core
    '^(react(.*)$)', // react third party
    '^(astro(.*)$)', // astro third party
    '<BUILTIN_MODULES>', // any node.js built-in
    '<THIRD_PARTY_MODULES>', // any npm modules
    '',
    '<TYPES>^react',
    '<TYPES>^astro',
    '<TYPES>',
    '<TYPES>^[.]',
    '^~/types/(.*)$',
    '',
    '^~/layouts/(.*)$',
    '^~/pages/(.*)$',
    '^~/lib/(.*)$',
    '^~/hooks/(.*)$',
    '',
    '^~/primitives/(.*)$',
    '^~/components/(.*)$',
    '',
    '^~/styles/(.*)$',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
    '^[./]'
  ],
  importOrderParserPlugins: ['typescript', 'jsx'],
  importOrderTypeScriptVersion: '5.0.0'
};
