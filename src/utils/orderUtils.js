const TAX_RATE = 0.085;

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
    discountFormatted: ccyFormat(totals.discount),
    taxesFormatted: ccyFormat(totals.taxes),
    totalFormatted: ccyFormat(totals.total),
  };
};

const validateInvoice = (invoice) => {
  let result = {
    valid: true,
    message: "",
  };
  let map = {};
  let cartSize = invoice.length;

  // Check for duplicate Products based on SKU
  if (cartSize > 1) {
    for (let i = 0; i < cartSize; i++) {
      // Check if object contains entry with this element as key
      if (map[invoice[i].sku]) {
        result = {
          valid: false,
          message: "Duplicate product in cart",
        };
        break;
      }
      // Add entry in object with the element as key
      map[invoice[i].sku] = true;
    }
  }

  return result;
};

export { ccyFormat, calculateInvoice, formatTotals, validateInvoice };
