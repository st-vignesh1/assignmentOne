export const tableKeys = {
  COMPANY: "company",
  CONTACT: "contact",
  COUNTRY: "country",
};
export const tableHeaders = {
  [tableKeys.COMPANY]: {
    columnLabel: "Company Name",
    key: tableKeys.COMPANY,
  },
  [tableKeys.CONTACT]: {
    columnLabel: "Contact",
    key: tableKeys.CONTACT,
  },
  [tableKeys.COUNTRY]: {
    columnLabel: "Country",
    key: tableKeys.COUNTRY,
  },
};
export const data = [
  {
    company: "Alfreds Futterkiste",
    contact: "Maria Anders",
    country: "Germany",
  },
  {
    company: "Centro comercial Moctezuma",
    contact: "Francisco Chang",
    country: "Mexico",
  },
  { company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
  { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
  {
    company: "Laughing Bacchus Winecellars",
    contact: "Yoshi Tannamuri",
    country: "Canada",
  },
  { company: "Italy", contact: "Giovanni Rovelli", country: "Italy" },
];
