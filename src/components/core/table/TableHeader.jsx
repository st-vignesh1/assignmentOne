import PropTypes from "prop-types";
import React from "react";
export default function TableHeader({ header }) {
  return (
    <th className="w-10 text-left border-1 border-gray-200 p-2">
      {header.columnLabel}
    </th>
  );
}
TableHeader.propTypes = {
  header: PropTypes.shape({
    columnLabel: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
};
