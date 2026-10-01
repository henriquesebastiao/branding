# CRÉDITOS

O que este pacote usa ou referencia, com a licença de cada item. Verificado em 2026-09-30.

## Fontes (referenciadas, não distribuídas)

`fonts.mjs` só descreve famílias e pesos. Cada site baixa as fontes do Google Fonts no build e as serve pelo próprio domínio.

| Fonte                          | Uso     | Licença                                                                           | Origem                                                    |
| ------------------------------ | ------- | --------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Bricolage Grotesque**        | títulos | SIL Open Font License 1.1. Copyright 2022 The Bricolage Grotesque Project Authors | https://github.com/ateliertriay/bricolage                 |
| **Atkinson Hyperlegible Next** | texto   | SIL Open Font License 1.1. Google Fonts em parceria com o Braille Institute       | https://github.com/googlefonts/atkinson-hyperlegible-next |

A SIL OFL 1.1 permite uso comercial e distribuição junto com o site, desde que o aviso de copyright e a licença acompanhem a fonte e ela não seja vendida isoladamente. Texto da licença: https://openfontlicense.org/. Para seguir a licença à risca, cada site pode copiar o `OFL.txt` de cada repositório acima para `public/licencas/`.

## Ícones e imagens

| Arquivo                                                     | O que é                                        | Direitos                                                                                         |
| ----------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `assets/favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | "H" desenhado com retângulos para a identidade | Henrique Sebastião, todos os direitos reservados ([LICENSE](LICENSE))                            |
| `assets/avatar.jpg`                                         | foto de Henrique Sebastião                     | **[CONFIRMAR]** autoria da foto e direitos de uso; foto provisória até a troca pela profissional |

Nenhum ícone, ilustração ou imagem de banco de terceiros.

## Software

O pacote não tem dependências. Ele espera que o site tenha:

| Pacote       | Faixa             | Licença | Papel                                        |
| ------------ | ----------------- | ------- | -------------------------------------------- |
| Astro        | ^7.3.0            | MIT     | componentes `.astro`, API de fontes, imagens |
| Tailwind CSS | ^4.3.0 (opcional) | MIT     | utilitários a partir dos tokens              |

## Ferramentas usadas só para verificar (não fazem parte do pacote)

Playwright, Lighthouse, html-validate e pixelmatch, nas verificações descritas no README de cada site.
