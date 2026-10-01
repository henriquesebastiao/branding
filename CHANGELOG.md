# CHANGELOG

Formato: uma seção por versão, a mais recente primeiro. Versões seguem SemVer:
**major** remove ou renomeia token, componente, prop ou export; **minor** adiciona; **patch** ajusta valor ou corrige.

## v0.1.0 (2026-09-30)

Primeira versão, extraída do portfólio sem nenhuma mudança visual.

- `tokens.css`: paleta (primitivos `--hs-sand-*`, `--hs-brown-*`, `--hs-green-*`, `--hs-white`), cores semânticas (`--hs-color-bg`, `-surface`, `-text`, `-text-muted`, `-border`, `-cta`, `-cta-hover`, `-on-cta`, `-focus`), corpo do texto, títulos, foco e raios (`--hs-radius-tip`, `-item`, `-bubble`, `-card`, `-panel`).
- `base.css`: fundo, texto, títulos, foco visível e movimento reduzido em `@layer base`.
- `tailwind.css`: tema do Tailwind 4 com os utilitários `page`, `surface`, `ink`, `muted`, `rule`, `accent`, `accent-hover`, `on-accent`, `font-display`, `font-sans` e `rounded-tip`, `-item`, `-bubble`, `-card`, `-panel`.
- `fonts.mjs`: `brandFonts(fontProviders)` com Bricolage Grotesque e Atkinson Hyperlegible Next (tipos em `fonts.d.mts`).
- `Head.astro`: parte comum do `<head>`, prop `preloadText`.
- `data/profile.ts`: nome, e-mail, GitHub, LinkedIn, endereços dos sites e da política de privacidade.
- `assets/`: foto e ícones.
- `scripts/check-local.mjs`: bloqueia commit e build com o pacote apontando para cópia local.
