const TAX_RATE = 0.085;

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const ccyFormat = (num) => {
  return formatter.format(num / 100);
};

const subtotal = (items) => {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
};

export { TAX_RATE, ccyFormat, subtotal };
