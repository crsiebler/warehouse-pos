import {
  ccyFormat,
  calculateInvoice,
  formatTotals,
  hasDuplicates,
  formatDate,
  validate,
  DUMMY_PRODUCT,
  NONE_SKU,
} from "./orderUtils";

test("ccyFormat", () => {
  expect(ccyFormat(100)).toEqual("$1.00");
  expect(ccyFormat(50)).toEqual("$0.50");
  expect(ccyFormat(1000)).toEqual("$10.00");
  expect(ccyFormat(100000)).toEqual("$1,000.00");
});

test("subtotal", () => {
  expect(calculateInvoice([{ price: 100, quantity: 1 }], 0)).toEqual({
    subtotal: 100,
    discount: 0,
    taxes: 8.5,
    total: 108.5,
    discountRate: 0,
  });
  expect(
    calculateInvoice(
      [
        { price: 10000, quantity: 1 },
        { price: 5000, quantity: 8 },
      ],
      0.5
    )
  ).toEqual({
    subtotal: 50000,
    discount: 25000,
    taxes: 4250,
    total: 29250,
    discountRate: 0.5,
  });
});

test("formatTotals", () => {
  expect(
    formatTotals({
      discountRate: 0,
      subtotal: 0,
      discount: 0,
      taxes: 0,
      total: 0,
    })
  ).toEqual({
    discountRate: 0,
    subtotal: 0,
    discount: 0,
    taxes: 0,
    total: 0,
    taxPercentage: "8.5 %",
    discountPercentage: "0.0 %",
    subtotalFormatted: "$0.00",
    discountFormatted: "($0.00)",
    taxesFormatted: "$0.00",
    totalFormatted: "$0.00",
  });

  expect(
    formatTotals({
      discountRate: 0.5,
      subtotal: 10000,
      discount: 5000,
      taxes: 850,
      total: 5850,
    })
  ).toEqual({
    discountRate: 0.5,
    subtotal: 10000,
    discount: 5000,
    taxes: 850,
    total: 5850,
    taxPercentage: "8.5 %",
    discountPercentage: "50.0 %",
    subtotalFormatted: "$100.00",
    discountFormatted: "($50.00)",
    taxesFormatted: "$8.50",
    totalFormatted: "$58.50",
  });
});

test("hasDuplicates", () => {
  expect(hasDuplicates([])).toEqual(false);
  expect(hasDuplicates([{ sku: "asdf" }, { sku: "qwerty" }])).toEqual(false);
  expect(
    hasDuplicates([{ sku: "asdf" }, { sku: "qwerty" }, { sku: "asdf" }])
  ).toEqual(true);
  expect(hasDuplicates([{ sku: NONE_SKU }, { sku: NONE_SKU }])).toEqual(false);
});

test("formatDate", () => {
  expect(formatDate(new Date("2021-03-29T12:00:00"))).toEqual(
    "3/29/2021, 12:00:00"
  );
  expect(formatDate(new Date("2020-02-29T15:00:00"))).toEqual(
    "2/29/2020, 15:00:00"
  );
  expect(formatDate(new Date("2020-12-25T23:59:59"))).toEqual(
    "12/25/2020, 23:59:59"
  );
});

test("validate", () => {
  expect(validate([DUMMY_PRODUCT])).toEqual(false);
  expect(validate([])).toEqual(false);
  expect(validate([{ sku: "abcd" }])).toEqual(true);
  expect(validate([{ sku: "abcd" }, { sku: "qwerty" }])).toEqual(true);
  expect(
    validate([{ sku: "asdf" }, { sku: "qwerty" }, { sku: "asdf" }])
  ).toEqual(false);
});
