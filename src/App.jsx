import RenderTable from "./components/table/RenderTable";

function App() {
  const tableKeys = {
    COMPANY: "company",
    CONTACT: "contact",
    COUNTRY: "country",
  };
  const tableHeaders = {
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
  const data = [
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
  const headers = Object.keys(tableHeaders).map(
    (header) => tableHeaders[header]
  );
  return (
    <div className="box-border w-full h-[100vh] pt-20 pl-10 pr-10">
      <RenderTable
        headers={headers}
        data={data}
        headerStyle="w-10 text-left border-1 border-gray-200 p-2"
        dataRowStyle="odd:bg-gray-300 even:bg-white"
        dataContentStyle="border-1 border-gray-200 p-2"
      />
    </div>
  );
}

export default App;
