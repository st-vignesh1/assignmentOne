import PropTypes from "prop-types";
import React from "react";
export default function TableHeader({ header, headerStyle }) {
  console.log(headerStyle);
  return <th className={headerStyle}>{header.columnLabel}</th>;
}
TableHeader.propTypes = {
  header: PropTypes.shape({
    columnLabel: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
  headerStyle: PropTypes.string,
};
