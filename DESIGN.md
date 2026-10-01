# DESIGN

A identidade visual de Henrique Sebastião, usada pelo portfólio, pela página de links e pelo blog. Este documento registra o que foi decidido e por quê. Os valores estão em `tokens.css` (cores e medidas) e `fonts.mjs` (fontes). Decisões de layout e de conteúdo de cada site ficam no `DESIGN.md` do site.

Origem: variante **C "Próxima"** do portfólio.

## Direção

O visual comunica atendimento pessoal e acessível: uma pessoa, não uma agência.

- **Uma ação só por página.** O verde existe apenas no botão de ação principal (no portfólio, o WhatsApp). Sites sem essa ação não usam verde.
- **Tema único, claro.** Areia quente e tinta marrom. Sem alternância de claro e escuro.
- **Sem enfeite.** Sem gradiente, sem ícone decorativo, sem animação de entrada.
- **Movimento só quando ajuda**, e instantâneo com `prefers-reduced-motion`.

## Paleta

| Token semântico | Utilitário | Primitivo | Hex | Uso |
|---|---|---|---|---|
| `--hs-color-bg` | `page` | `--hs-sand-100` | `#F4EEE5` | fundo da página |
| `--hs-color-surface` | `surface` | `--hs-sand-50` | `#FCFAF6` | cartões, perguntas, blocos |
| `--hs-color-text` | `ink` | `--hs-brown-900` | `#2A2520` | texto principal, títulos |
| `--hs-color-text-muted` | `muted` | `--hs-brown-600` | `#655C52` | texto secundário |
| `--hs-color-border` | `rule` | `--hs-sand-300` | `#DDD2C3` | filetes; hover de botão neutro |
| `--hs-color-cta` | `accent` | `--hs-green-700` | `#1B6B46` | **só** o botão de ação principal |
| `--hs-color-cta-hover` | `accent-hover` | `--hs-green-800` | `#145236` | botão de ação em hover |
| `--hs-color-on-cta` | `on-accent` | `--hs-white` | `#FFFFFF` | texto no botão de ação |
| `--hs-color-focus` | (base) | `--hs-brown-900` | `#2A2520` | anel de foco |

Duas camadas: os **primitivos** dão nome à paleta crua; os **semânticos** dizem para que serve cada cor. Os sites só usam os semânticos (pelos utilitários do Tailwind). Trocar a cor do fundo = mudar uma linha em `tokens.css`.

### Contraste (WCAG 2.2 AA)

| Par | Razão | Mínimo | |
|---|---|---|---|
| `ink` sobre `page` | 13,16:1 | 4,5 | ✓ |
| `ink` sobre `surface` | 14,56:1 | 4,5 | ✓ |
| `muted` sobre `page` | 5,68:1 | 4,5 | ✓ |
| `muted` sobre `surface` | 6,28:1 | 4,5 | ✓ |
| `ink` sobre `rule` (botão neutro em hover) | 10,17:1 | 4,5 | ✓ |
| branco sobre `accent` | 6,49:1 | 4,5 | ✓ |
| branco sobre `accent-hover` | 9,17:1 | 4,5 | ✓ |
| `page` sobre `ink` (link "Pular para o conteúdo") | 13,16:1 | 4,5 | ✓ |
| botão `accent` contra `page` / `surface` | 5,62:1 / 6,22:1 | 3 | ✓ |
| anel de foco `ink` contra `page` / `surface` | 13,16:1 / 14,56:1 | 3 | ✓ |
| **`muted` sobre `rule`** | **4,39:1** | 4,5 | **✗ não usar** |
| `rule` contra `page` (filetes) | 1,29:1 | n/a | decorativo |

`muted` sobre `rule` reprova: texto secundário não pode ficar sobre fundo `rule` (hoje acontece no hover dos links do linkbio; pendente).

## Tipografia

Duas famílias, ambas SIL OFL 1.1, **auto-hospedadas** pela API de fontes do Astro (baixadas no build, servidas pelo próprio site), só o subconjunto latino, `font-display: swap`. Configuração em `fonts.mjs`.

| Papel | Família | Pesos | Variável |
|---|---|---|---|
| Títulos | Bricolage Grotesque | 500 e 600, eixo `opsz` 12 a 96 | `--hs-font-display` (`font-display`) |
| Texto | Atkinson Hyperlegible Next | 400 e 600 | `--hs-font-text` (`font-sans`) |

- Corpo: 18 px (`--hs-text-body`), entrelinha 1,65 (`--hs-leading-body`).
- Títulos `h1` a `h3`: peso 600, espaçamento `-0.02em`.
- Cada família é um único arquivo variável; os pesos dividem o arquivo.
- A fonte dos títulos é sempre pré-carregada (`Head.astro`); a do texto, quando a página pede (`preloadText`).
- **Por que o `opsz`:** sem ele, a Bricolage usa o corte de texto, 5,7% mais largo que o aprovado. Custo: cerca de 35 KB a mais.
- A Atkinson só tem 400 e 600 carregados: `font-medium` (500) nela aparece em 400.

Tamanhos de título e de texto auxiliar são decisão de cada site (cada página tem sua hierarquia).

## Raios

| Token | Utilitário | Valor | Uso |
|---|---|---|---|
| `--hs-radius-tip` | `rounded-tip` | 6 px | "ponta" do balão de mensagem |
| `--hs-radius-item` | `rounded-item` | 22 px | perguntas, links, itens |
| `--hs-radius-bubble` | `rounded-bubble` | 26 px | balão de mensagem |
| `--hs-radius-card` | `rounded-card` | 28 px | cartões, fotos |
| `--hs-radius-panel` | `rounded-panel` | 32 px | blocos grandes |

Botões são pílula (`rounded-full`); fotos de pessoa, círculo.

Sugestão (não aplicada): 26 e 28 px são quase iguais; um só valor simplificaria a escala.

## Foco e movimento

- **Foco visível** em links, `summary` e botões: anel de 3 px na cor do texto, afastado 3 px. Contraste acima de 13:1 nos dois fundos.
- **`prefers-reduced-motion: reduce`:** transições e animações desligadas.

Ambos em `base.css`, na camada `base`: qualquer utilitário do Tailwind vence sem `!important`.

## Ícones e foto

- **Favicon:** um "H" desenhado com retângulos, `ink` sobre `page` arredondado. Os arquivos (`favicon.svg`, `.ico`, `apple-touch-icon.png`) têm as cores gravadas, porque um ícone não lê variáveis CSS. **Se `--hs-color-text` ou `--hs-color-bg` mudarem, refaça os três.**
- **Foto:** `assets/avatar.jpg`, sempre em círculo.
- **Imagem de compartilhamento (`og.jpg`):** é de cada site (texto diferente), montada com a foto e as duas fontes.

## O que ficou de fora e por quê

- **Modo escuro:** tema único é mais simples de manter e de testar.
- **Gradientes, ícones e animações de entrada:** não ajudam a pessoa a decidir.
- **Estilo de seleção de texto e de links globais:** não existiam no portfólio; criar seria decisão visual nova. Links são sublinhados pelo utilitário no próprio markup.
- **Escala tipográfica de títulos, larguras de coluna, espaçamentos, breakpoints e z-index:** são de layout, ficam em cada site (todos usam os padrões do Tailwind, com `md` em 768 px).
