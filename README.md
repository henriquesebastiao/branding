# @henriquesebastiao/branding

Identidade visual de Henrique Sebastião em um pacote: cores, medidas, fontes, estilos base, ícones, foto e os dados que mais de um site usa. Usado por:

- portfólio: [henriquesebastiao.com](https://henriquesebastiao.com)
- links: [links.henriquesebastiao.com](https://links.henriquesebastiao.com)
- blog: [blog.henriquesebastiao.com](https://blog.henriquesebastiao.com) (vai adotar o pacote ao migrar para Astro)

Sem etapa de build e sem dependências: os arquivos deste repositório são os arquivos que os sites usam. Uso exclusivo do autor (ver [LICENSE](LICENSE)).

## Arquivos

| Arquivo | O que é |
|---|---|
| `tokens.css` | **Fonte única** dos valores: paleta crua (primitivos) e nomes por função (semânticos), como custom properties `--hs-*`. |
| `base.css` | Estilos globais mínimos (fundo, texto, títulos, foco visível, movimento reduzido) dentro de `@layer base`. |
| `tailwind.css` | Importa os dois acima e mapeia os tokens para o tema do Tailwind 4 (`bg-page`, `text-ink`, `rounded-card`...). |
| `fonts.mjs` (+ `fonts.d.mts`, tipos) | Famílias e pesos para a API de fontes do Astro. Fonte única das fontes. |
| `components/Head.astro` | Parte comum do `<head>`. |
| `data/profile.ts` | Nome, e-mail, redes e endereços dos sites. |
| `assets/` | Foto (`avatar.jpg`) e ícones (`favicon.svg`, `favicon.ico`, `apple-touch-icon.png`). |
| `scripts/check-local.mjs` | Impede commitar o site apontando para uma cópia local do pacote. |

## Instalação

Sempre por tag, nunca por branch:

```bash
echo "allow-git=root" >> .npmrc   # uma vez por site (ver abaixo)
npm install github:henriquesebastiao/branding#v0.1.0
```

A partir do npm 12, dependências Git vêm bloqueadas (`allow-git` com padrão `none`). O `.npmrc` do site, versionado, libera só as dependências Git declaradas pelo próprio site (`root`), não as de terceiros.

O `package.json` do site guarda `"@henriquesebastiao/branding": "github:henriquesebastiao/branding#v0.1.0"` e o `package-lock.json` fixa o commit. `astro` (^7.3) e `tailwindcss` (^4.3, opcional) são `peerDependencies`: o site já os tem.

## Uso em Astro + Tailwind

**`astro.config.mjs`:** as fontes vêm do pacote.

```js
import { defineConfig, fontProviders } from "astro/config";
import { brandFonts } from "@henriquesebastiao/branding/fonts";

export default defineConfig({
  fonts: brandFonts(fontProviders),
  // ...
});
```

**CSS do site** (ex.: `src/styles/global.css`):

```css
@import "tailwindcss";
@import "@henriquesebastiao/branding/tailwind.css";

/* Daqui para baixo, só o que é do site (layout, ajustes locais). */
```

**Layout:**

```astro
---
import Head from "@henriquesebastiao/branding/Head.astro";
import "../styles/global.css";
---
<html lang="pt-BR">
  <head>
    <Head />
    <title>...</title>
    <meta name="description" content="..." />
    <!-- canonical, og:title, og:url, og:image, JSON-LD: do site -->
  </head>
  ...
```

**Dados e foto:**

```ts
import { profile } from "@henriquesebastiao/branding/profile";
import avatar from "@henriquesebastiao/branding/assets/avatar.jpg"; // use com <Picture>
```

### Sem Tailwind

Importe `tokens.css` e `base.css` e use as variáveis `--hs-*` direto (`color: var(--hs-color-text-muted)`).

## Tokens

Os sites usam os **semânticos**. Os primitivos (`--hs-sand-100`, `--hs-brown-900`...) só dão nome à paleta.

| Token | Utilitário Tailwind | Uso |
|---|---|---|
| `--hs-color-bg` | `page` | fundo da página |
| `--hs-color-surface` | `surface` | cartões e blocos |
| `--hs-color-text` | `ink` | texto principal |
| `--hs-color-text-muted` | `muted` | texto secundário |
| `--hs-color-border` | `rule` | filetes; hover de botão neutro |
| `--hs-color-cta` / `-cta-hover` | `accent` / `accent-hover` | **só** o botão de ação principal |
| `--hs-color-on-cta` | `on-accent` | texto no botão de ação |
| `--hs-color-focus` | (base.css) | anel de foco |
| `--hs-font-display` / `--hs-font-text` | `font-display` / `font-sans` | títulos / texto (criadas pela API de fontes) |
| `--hs-radius-tip`, `-item`, `-bubble`, `-card`, `-panel` | `rounded-tip`, `-item`, `-bubble`, `-card`, `-panel` | 6, 22, 26, 28 e 32 px |
| `--hs-text-body`, `--hs-leading-body` | (base.css) | 18 px, 1,65 |
| `--hs-font-weight-heading`, `--hs-tracking-heading` | (base.css) | 600, -0.02em |
| `--hs-focus-width`, `--hs-focus-offset` | (base.css) | 3 px, 3 px |

Um site pode mudar um valor só para ele sobrescrevendo o token no próprio CSS (ex.: o linkbio usa `--hs-leading-body: 1.6`). Use com parcimônia: cada exceção é uma divergência da identidade.

## Componentes

### `Head.astro`

Gera: `charset`, `viewport`, `theme-color` (lido de `--hs-color-bg` em `tokens.css`), os três ícones (com endereço com hash, em `/_astro/`), `og:type`, `og:locale`, `og:site_name`, `twitter:card` e as fontes (`<Font>`).

| Prop | Tipo | Padrão | Efeito |
|---|---|---|---|
| `preloadText` | `boolean` | `false` | Pré-carrega também a fonte do texto. A dos títulos é sempre pré-carregada. Use em página curta, onde o texto aparece na primeira tela (evita a lista "pular" quando a fonte chega). |

Não gera: título, descrição, canonical, `robots`, `og:title`, `og:description`, `og:url`, `og:image` e JSON-LD. Esses são de cada página.

## Atualizar o pacote num site

```bash
npm install github:henriquesebastiao/branding#vX.Y.Z
npm run build && npm run check
```

Leia o `CHANGELOG.md` antes: versão maior exige mudança no site.

## Desenvolver o pacote vendo o resultado num site

Sem criar tag:

```bash
cd ~/git/henriquesebastiao.com
npm install --no-save ../branding   # node_modules passa a apontar para ~/git/branding
npm run dev                         # mudanças no pacote aparecem no site
npm install                         # ao terminar: volta para a versão da tag
```

`--no-save` não altera o `package.json` nem o `package-lock.json`. (`npm link` também não, mas precisa de escrita na pasta global do npm.) Mesmo assim, cada site roda `scripts/check-local.mjs` no `pre-commit` (hook em `.githooks/`, ativado com `git config core.hooksPath .githooks`) e antes do build. Ele falha se o `package.json` ou o `package-lock.json` apontarem para `file:`, `link:` ou `git+file:`.

## Lançar uma versão

1. Escolha o número (SemVer):
   - **major**: remove ou renomeia token, componente, prop ou export;
   - **minor**: item novo (token, componente, prop, dado);
   - **patch**: ajuste de valor ou correção.
2. Atualize `version` no `package.json` e escreva a entrada no `CHANGELOG.md`.
3. Commit e tag anotada:
   ```bash
   git commit -am "versão: vX.Y.Z"
   git tag -a vX.Y.Z -m "vX.Y.Z"
   git push && git push --tags
   ```
4. Atualize cada site (seção acima).

Uma tag publicada nunca é movida nem apagada: os sites dependem dela.

## Nova versão maior do Astro ou do Tailwind

1. Num site, com `npm install --no-save ../branding`, atualize o Astro (ou o Tailwind) e rode `build`, `check` e as capturas de tela.
2. Se algo do pacote quebrar (ex.: API de fontes, `@theme`, `@source`), corrija no pacote.
3. Amplie a faixa em `peerDependencies`, mantendo a antiga enquanto algum site a usar: `"astro": "^7.3.0 || ^8.0.0"`.
4. Lance uma **minor** (ou **major**, se a versão antiga deixar de funcionar e a faixa precisar perder `^7`).

## Documentos

- [DESIGN.md](DESIGN.md): decisões da identidade e contrastes.
- [CHANGELOG.md](CHANGELOG.md): o que mudou em cada versão.
- [CREDITOS.md](CREDITOS.md): fontes, imagens e licenças.
- [LICENSE](LICENSE): uso exclusivo do autor.
