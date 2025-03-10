import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
export default function RenderTable({ headers, data, dataRowStyle ,linkColumn}) {

  return (
     <table className="w-full border-1 border-gray-200 capitalize ">
      <thead className="bg-white  border-gray-200 border-b-1">
        <tr className="w-full">
          {headers?.length ?
            headers.map((header, index) => (
              <th className="w-10 text-left border-1 border-gray-200 p-2" key={index}>
                {header}
              </th>
            )):<th className="text-center p-2" colSpan="100%">No Headers Available</th>}
        </tr>
      </thead>
      <tbody>
        {data?.length ?
          data.map((val, index) => (
            <tr className={dataRowStyle} key={index}>
              {headers?.length ? headers.map((header, ind) => (
                <td className="border-1 border-gray-200 p-2 " key={`${index}.${ind}`}>
                  {linkColumn && header === linkColumn ?
                  <Link to={header===linkColumn ?`/company/${val[header]}` :"" } >
                  {val && typeof val ==="object" && val[header]!==undefined? val[header]:"N/A"} 
                  </Link>
                  :      val && typeof val ==="object" && val[header]!==undefined? val[header]:"N/A" }
                  </td>
               
              )):<td className="text-center">Invalid Header</td>}
            </tr>
          )):
          <tr className={dataRowStyle}>
            <td className="text-center p-2" colSpan={headers?.length?headers.length:1}>No Data Available</td>
          </tr>
          }
      </tbody>
    </table>
  );
}
RenderTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.objectOf([PropTypes.string, PropTypes.number])
  ).isRequired,
  dataRowStyle: PropTypes.string,
  linkColumn:PropTypes.string
};
