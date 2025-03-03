import jsonData from "../data/Data.json";

export const tableKeys = jsonData.tableKeys;

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

export const data = jsonData.data;
