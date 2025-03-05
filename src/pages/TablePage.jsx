import RenderTable from "../components/core/table/RenderTable";


function TablePage({ headers, data }) {
  return (
    <div className="box-border w-full h-fit pt-10 ">
      <RenderTable
        headers={headers}
        data={data}
        dataRowStyle="odd:bg-gray-300 even:bg-white"
      />
    </div>
  );
}

export default TablePage;
