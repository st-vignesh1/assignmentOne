import PropTypes from "prop-types";
import React from "react";
export default function TableData({ headers, val, dataRowStyle }) {
  return (
    <tr className={dataRowStyle}>
      {headers.map((header, index) => (
        <td className="border-1 border-gray-200 p-2" key={index}>
          {val[header.key]}
        </td>
      ))}
    </tr>
  );
}

TableData.propTypes = {
  header: PropTypes.shape({
    columnLabel: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
  val: PropTypes.objectOf(PropTypes.string),
  dataContentStyle: PropTypes.string,
  dataRowStyle: PropTypes.string,
};
