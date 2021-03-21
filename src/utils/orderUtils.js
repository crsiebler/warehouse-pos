const TAX_RATE = 0.085;
const NONE_SKU = "*None*";
const DUMMY_PRODUCT = {
  id: "",
  sku: NONE_SKU,
  name: "",
  price: 0,
  quantity: 1,
  inventory: 1,
};
const DATE_FORMATION_OPTIONS = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ccyFormat = (num) => {
  return formatter.format(num / 100);
};

const subtotal = (items) => {
  return items
    .map(({ price, quantity }) => price * quantity)
    .reduce((sum, i) => sum + i, 0);
};

const calculateInvoice = (cart, discountRate) => {
  let result = {
    subtotal: 0,
    discount: 0,
    taxes: 0,
    total: 0,
    discountRate,
  };

  // Make sure the invoice has product
  if (cart && cart.length > 0) {
    result.subtotal = subtotal(cart);
    result.discount = discountRate * result.subtotal;
    result.taxes = TAX_RATE * result.subtotal;
    result.total = result.subtotal + result.taxes - result.discount;
  }

  return result;
};

const formatTotals = (totals) => {
  return {
    ...totals,
    taxPercentage: `${(TAX_RATE * 100).toFixed(1)} %`,
    discountPercentage: `${(totals.discountRate * 100).toFixed(1)} %`,
    subtotalFormatted: ccyFormat(totals.subtotal),
    discountFormatted: `(${ccyFormat(totals.discount)})`,
    taxesFormatted: ccyFormat(totals.taxes),
    totalFormatted: ccyFormat(totals.total),
  };
};

const hasDuplicates = (invoice) => {
  let result = false;
  let map = {};
  let cartSize = invoice.length;

  // Check for duplicate Products based on SKU
  if (cartSize > 1) {
    for (let i = 0; i < cartSize; i++) {
      // Skip the products in cart that have not been selected yet
      if (invoice[i].sku === NONE_SKU) {
        continue;
      } else if (map[invoice[i].sku]) {
        // Cart contains entry with this element as key
        result = true;
        break;
      }
      // Add entry in object with the element as key
      map[invoice[i].sku] = true;
    }
  }

  return result;
};

const containsDummyProduct = (invoice) => {
  return invoice.includes(DUMMY_PRODUCT);
};

const validate = (invoice, showAlert = () => {}) => {
  let valid = true;
  if (invoice.length < 1) {
    showAlert({
      open: true,
      severity: "warning",
      message: "No products in cart",
    });
    valid = false;
  } else if (hasDuplicates(invoice)) {
    showAlert({
      open: true,
      severity: "warning",
      message: "Duplicate product in cart",
    });
    valid = false;
  } else if (containsDummyProduct(invoice)) {
    showAlert({
      open: true,
      severity: "warning",
      message: "One or more products not set",
    });
    valid = false;
  }

  return valid;
};

const formatDate = (date, options = DATE_FORMATION_OPTIONS) => {
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const printInvoice = () => {
  // Print the iframe containing the invoice
  const frame = document.getElementById("invoiceIframe");
  const contentWindow = frame.contentWindow;
  const innerHTML = frame.innerHTML;
  contentWindow.document.open();
  contentWindow.document.write(innerHTML);
  contentWindow.document.close();
  contentWindow.focus();
  contentWindow.print();
};

export {
  NONE_SKU,
  DUMMY_PRODUCT,
  ccyFormat,
  calculateInvoice,
  formatTotals,
  hasDuplicates,
  formatDate,
  printInvoice,
  validate,
};
