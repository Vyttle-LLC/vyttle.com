import next from "eslint-config-next";

/**
 * Flat config (ESLint 9). `eslint-config-next` ships a native flat-config array
 * that already bundles next/core-web-vitals, next/typescript, and jsx-a11y — so
 * we spread it directly, no FlatCompat shim needed.
 * @type {import("eslint").Linter.Config[]}
 */
const eslintConfig = [
  { ignores: [".next/**", "out/**", "next-env.d.ts"] },
  ...next,
];

export default eslintConfig;
