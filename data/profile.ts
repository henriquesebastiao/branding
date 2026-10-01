/**
 * Quem é e onde encontrar: dados usados por mais de um site.
 * Contato que só um site usa (ex.: WhatsApp do portfólio) fica no próprio site.
 */
export const profile = {
  name: "Henrique Sebastião",
  email: "contato@henriquesebastiao.com",
  github: "https://github.com/henriquesebastiao",
  linkedin: "https://www.linkedin.com/in/henriquesebastiao",
  sites: {
    portfolio: "https://henriquesebastiao.com",
    blog: "https://blog.henriquesebastiao.com",
    links: "https://links.henriquesebastiao.com",
  },
  privacyUrl: "https://henriquesebastiao.com/privacidade/",
} as const;

export type Profile = typeof profile;
