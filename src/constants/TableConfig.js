import jsonData from "../data/TableData.json";

export const columnKeys = {
  COMPANY: "company",
  CONTACT: "contact",
  COUNTRY: "country",
};

export const tableHeaders = {
  [columnKeys.COMPANY]: {
    columnLabel: "Company Name",
    key: columnKeys.COMPANY,
  },
  [columnKeys.CONTACT]: {
    columnLabel: "Contact",
    key: columnKeys.CONTACT,
  },
  [columnKeys.COUNTRY]: {
    columnLabel: "Country",
    key: columnKeys.COUNTRY,
  },
};

export const data = jsonData.data;
