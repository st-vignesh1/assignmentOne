import PropTypes from "prop-types";
import React from "react";
export default function RenderTable({ headers, data, dataRowStyle }) {
  return (
    headers && <table className="w-full border-1 border-gray-200 capitalize ">
      <thead className="bg-white  border-gray-200 border-b-1">
        <tr className="w-full">
          {headers?.length &&
            headers.map((header, index) => (
              <th className="w-10 text-left border-1 border-gray-200 p-2" key={index}>
                {header}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data?.length &&
          data?.map((val, index) => (
            <tr className={dataRowStyle} key={index}>
              {headers.map((header, ind) => (
                <td className="border-1 border-gray-200 p-2 " key={`${index}.${ind}`}>
                  {val[header]}
                </td>
              ))}
            </tr>
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
  dataRowStyle: PropTypes.string,
};
