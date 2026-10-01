// Famílias e pesos da identidade, para a API de fontes do Astro (fonte única das fontes).
// Recebe o `fontProviders` do site para o pacote não importar o Astro por conta própria.
//
//   import { defineConfig, fontProviders } from "astro/config";
//   import { brandFonts } from "@henriquesebastiao/branding/fonts";
//   export default defineConfig({ fonts: brandFonts(fontProviders) });

/** @param {typeof import("astro/config").fontProviders} fontProviders */
export function brandFonts(fontProviders) {
  return [
    {
      provider: fontProviders.google(),
      name: "Bricolage Grotesque",
      cssVariable: "--hs-font-display",
      weights: ["500", "600"],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
      fallbacks: ["sans-serif"],
      // Eixo de tamanho óptico: nos títulos grandes a fonte usa o corte mais condensado.
      options: { experimental: { variableAxis: { opsz: [["12", "96"]] } } },
    },
    {
      provider: fontProviders.google(),
      name: "Atkinson Hyperlegible Next",
      cssVariable: "--hs-font-text",
      weights: ["400", "600"],
      styles: ["normal"],
      subsets: ["latin"],
      display: "swap",
      fallbacks: ["sans-serif"],
    },
  ];
}
