import PropTypes from "prop-types";
import React from "react";
import TableData from "./TableData";
import TableHeader from "./TableHeader";
export default function RenderTable({
  headers,
  data,
  headerStyle,
  dataRowStyle,
  dataContentStyle,
}) {
  return (
    <table className="w-full border-1 border-gray-200 capitalize">
      <thead className="bg-white  border-gray-200 border-b-1">
        <tr className="w-full">
          {headers.length > 0 &&
            headers.map((header, index) => (
              <TableHeader
                key={index}
                header={header}
                headerStyle={headerStyle}
              />
            ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 &&
          data.map((val, index) => (
            <TableData
              val={val}
              headers={headers}
              key={index}
              dataRowStyle={dataRowStyle}
              dataContentStyle={dataContentStyle}
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
  headerStyle: PropTypes.string,
  dataContentStyle: PropTypes.string,
  dataRowStyle: PropTypes.string,
};
