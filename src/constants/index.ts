const startYear = 1980;
const endYear = 2021;

export const minYear = [
  { title: "Min Year", value: null },
  ...Array.from({ length: endYear - startYear + 1 }, (_, index) => {
    const year = startYear + index;
    return { title: year.toString(), value: year };
  })
];

export const maxYear = [
  { title: "Max Year", value: null },
  ...Array.from({ length: endYear - startYear + 1 }, (_, index) => {
    const year = startYear + index;
    return { title: year.toString(), value: year };
  })
];


export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];