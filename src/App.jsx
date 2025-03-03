import RenderTable from "./components/table/RenderTable";
import { data, tableHeaders } from "../src/constants/Constants";

function App() {
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
