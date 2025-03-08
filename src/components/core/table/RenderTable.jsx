import PropTypes from "prop-types";
import React from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
export default function RenderTable({ headers, data, dataRowStyle }) {
  return (
    <table className="w-full border-1 border-gray-200 capitalize">
      <thead className="bg-white  border-gray-200 border-b-1">
        <tr className="w-full">
          {headers?.length &&
            headers.map((header, index) => (
              <TableHeader key={index} header={header} />
            ))}
        </tr>
      </thead>
      <tbody>
        {data?.length &&
          data?.map((val, index) => (
            <TableData
              val={val}
              headers={headers}
              key={index}
              dataRowStyle={dataRowStyle}
            />
          ))}
      </tbody>
    </table>
  );
}
RenderTable.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      columnLabel: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.objectOf([PropTypes.string, PropTypes.number])
  ).isRequired,
  dataContentStyle: PropTypes.string,
  dataRowStyle: PropTypes.string,
};
