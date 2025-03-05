import { useSelector } from "react-redux";
import RenderTable from "../components/core/table/RenderTable";
import { data, tableHeaders } from "../constants/TableConfig";

function TablePage() {
  const headers = Object.keys(tableHeaders).map(
    (header) => tableHeaders[header]
  );

  return (
    <div className="box-border w-full h-[100vh] pt-20 pl-10 pr-10">
      <RenderTable
        headers={headers}
        data={data}
        dataRowStyle="odd:bg-gray-300 even:bg-white"
      />
    </div>
  );
}

export default TablePage;
