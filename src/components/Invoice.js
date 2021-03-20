import React from "react";
import PropTypes from "prop-types";

const InvoiceDisplay = ({ invoice }) => {
  return <table>{invoice}</table>;
};

InvoiceDisplay.propTypes = {
  invoice: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      sku: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      inventory: PropTypes.number,
    })
  ),
};

export default InvoiceDisplay;
