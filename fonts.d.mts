// Tipos de fonts.mjs (o astro.config dos sites usa // @ts-check).
import type { AstroUserConfig } from "astro";
import type { fontProviders } from "astro/config";

export function brandFonts(
  providers: typeof fontProviders,
): NonNullable<AstroUserConfig["fonts"]>;
