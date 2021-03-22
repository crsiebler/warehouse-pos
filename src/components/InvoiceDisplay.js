import React from "react";
import PropTypes from "prop-types";
import {
  calculateInvoice,
  formatTotals,
  ccyFormat,
  formatDate,
} from "../utils/orderUtils";

const InvoiceDisplay = ({ contractor, invoice }) => {
  const now = formatDate(new Date());

  const {
    subtotalFormatted,
    discountFormatted,
    taxesFormatted,
    totalFormatted,
    taxPercentage,
    discountPercentage,
  } = React.useMemo(
    () => formatTotals(calculateInvoice(invoice, contractor.discount)),
    [invoice, contractor.discount]
  );

  return (
    <iframe
      id="invoiceIframe"
      title="invoice"
      style={{
        height: "0px",
        width: "0px",
        position: "absolute",
        visibility: "hidden",
      }}
    >
      <div id="invoiceContents">
        <style type="text/css" media="print">{`
          @page { margin-top: 2cm; size: landscape; }
          table { padding-top: 1cm; width: 100%; }
          .date { padding-bottom: 1cm; }
          .left { text-align: left; }
          .center { text-align: center; }
          .right { text-align: right; }
          .red { color: red; }
          .bold { font-weight: bold; }
          .blank { height: 1cm; }
        `}</style>
        <div className="date">
          <label className="bold">Invoice Date: </label>
          <span>{now}</span>
        </div>
        <div>
          <div>
            <label className="bold">Contractor ID: </label>
            <span>{contractor.id}</span>
          </div>
          <div>
            <label className="bold">Name: </label>
            <span>{contractor.name}</span>
          </div>
          <div>
            <label className="bold">Company: </label>
            <span>{contractor.company}</span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="left">Part No.</th>
              <th className="left">Description</th>
              <th>Quantity</th>
              <th className="right">Unit Price</th>
              <th className="right">Sum</th>
            </tr>
          </thead>
          <tbody>
            {invoice.map((product, index) => (
              <tr key={index}>
                <td>{product.sku}</td>
                <td>{product.name}</td>
                <td align="center">{product.quantity}</td>
                <td align="right">{ccyFormat(product.price)}</td>
                <td align="right">
                  {ccyFormat(product.price * product.quantity)}
                </td>
              </tr>
            ))}
            <tr className="blank">
              <td colSpan={5}></td>
            </tr>
            <tr>
              <td rowSpan={4} colSpan={2}></td>
              <td colSpan={2} className="bold">
                Subtotal
              </td>
              <td align="right" className="bold">
                {subtotalFormatted}
              </td>
            </tr>
            <tr>
              <td className="bold">Discount</td>
              <td align="right">{discountPercentage}</td>
              <td align="right" className="bold red">
                {discountFormatted}
              </td>
            </tr>
            <tr>
              <td className="bold">Tax</td>
              <td align="right">{taxPercentage}</td>
              <td align="right" className="bold">
                {taxesFormatted}
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="bold">
                Total
              </td>
              <td align="right" className="bold">
                {totalFormatted}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </iframe>
  );
};

InvoiceDisplay.propTypes = {
  contractor: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
    discount: PropTypes.number,
  }).isRequired,
  invoice: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      sku: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      inventory: PropTypes.number,
      quantity: PropTypes.number,
    })
  ).isRequired,
};

InvoiceDisplay.defaultProps = {
  contractor: {
    id: "",
    name: "",
    company: "",
    discount: 0,
  },
  invoice: [],
};

export default React.memo(InvoiceDisplay);
