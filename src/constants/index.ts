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
