import React from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { useDisplay, useDisplayDispatch } from "../context/displayContext";
import { useContractor } from "../context/contractorContext";
import { useInvoice } from "../context/invoiceContext";
import { useProduct } from "../context/productContext";
import { getProducts } from "../api/productApi";
import { validateInvoice } from "../utils/orderUtils";
import OrderTableHeader from "./OrderTableHeader";
import ProductRow from "./ProductRow";
import OrderTotals from "./OrderTotals";
import Snackbar from "./Snackbar";

const OrderForm = () => {
  const { calculate, alert } = useDisplay();
  const { hideAlert, hideTotal, showAlert } = useDisplayDispatch();
  const { state: contractor } = useContractor();
  const { state: invoice, dispatch: dispatchInvoice } = useInvoice();
  const { state: products, dispatch: dispatchProduct } = useProduct();
  // const [products, setProducts] = React.useState([]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    hideAlert();
  };

  const handleAddButton = React.useCallback(
    (e) => {
      e.preventDefault();

      if (products.length > 0) {
        hideTotal();
        dispatchInvoice({ type: "add_product", data: products });
      } else {
        getProducts()
          .then(({ data }) => {
            if (data.length > 0) {
              data.sort((a, b) => {
                return a.sku.localeCompare(b.sku);
              });
              hideTotal();
              dispatchProduct({ type: "set_products", data });
              dispatchInvoice({ type: "add_product", data });
            } else {
              showAlert({
                open: true,
                severity: "warning",
                message: "No products in system",
              });
            }
          })
          .catch((error) => {
            showAlert({
              open: true,
              severity: "error",
              message: "Fail to retrieve Products",
            });
            console.log(`Error: ${JSON.stringify(error)}`);
          });
      }
    },
    [dispatchInvoice, dispatchProduct, hideTotal, products, showAlert]
  );

  // const handleAddButton = () => {
  //   const data = [
  //     {
  //       id: "1",
  //       name: "Intelligent Frozen Cheese",
  //       price: 25,
  //       sku: "fcb3659b-cbe9-43b9-9276-e1a82b17cc1b",
  //       inventory: 77,
  //     },
  //     {
  //       id: "2",
  //       name: "Tasty Concrete Bacon",
  //       price: 81,
  //       sku: "346f0e04-73fb-47ba-95b9-ba83473fe5ae",
  //       inventory: 65,
  //     },
  //     {
  //       id: "3",
  //       name: "Handcrafted Metal Towels",
  //       price: 45,
  //       sku: "3124da7e-c212-4657-8df8-7fc0a144b503",
  //       inventory: 98,
  //     },
  //     {
  //       id: "4",
  //       name: "Gorgeous Metal Chair",
  //       price: 97,
  //       sku: "2cfd9087-3c24-4f9b-b373-314248dd5f42",
  //       inventory: 28,
  //     },
  //     {
  //       id: "5",
  //       name: "Small Soft Chicken",
  //       price: 97,
  //       sku: "1dcca12a-75e8-484c-9f37-d6b30073ec59",
  //       inventory: 13,
  //     },
  //     {
  //       id: "6",
  //       name: "Handmade Soft Soap",
  //       price: 64,
  //       sku: "304abd81-5535-4e8b-b7af-5b999756af24",
  //       inventory: 11,
  //     },
  //     {
  //       id: "7",
  //       name: "Practical Metal Mouse",
  //       price: 81,
  //       sku: "ee2673c5-a0a7-444f-853e-f93ae150ecd8",
  //       inventory: 94,
  //     },
  //     {
  //       id: "8",
  //       name: "Gorgeous Wooden Cheese",
  //       price: 40,
  //       sku: "4f84d43b-6839-4dab-a721-098e522f6544",
  //       inventory: 4,
  //     },
  //     {
  //       id: "9",
  //       name: "Incredible Rubber Pants",
  //       price: 87,
  //       sku: "780ee739-185b-45ce-be7c-0df59eebb067",
  //       inventory: 64,
  //     },
  //     {
  //       id: "10",
  //       name: "Handcrafted Steel Ball",
  //       price: 1,
  //       sku: "af0c941a-ca4c-41df-a00a-697b24f01977",
  //       inventory: 45,
  //     },
  //     {
  //       id: "11",
  //       name: "Sleek Concrete Pizza",
  //       price: 20,
  //       sku: "084b96ae-68c9-4446-854c-34b28e1167c3",
  //       inventory: 74,
  //     },
  //     {
  //       id: "12",
  //       name: "Intelligent Soft Hat",
  //       price: 11,
  //       sku: "86dcc5da-d93a-44a4-9274-1569006a9239",
  //       inventory: 32,
  //     },
  //     {
  //       id: "13",
  //       name: "Handmade Rubber Pants",
  //       price: 42,
  //       sku: "b9574193-04e4-41f2-adfe-c926cc17a080",
  //       inventory: 5,
  //     },
  //     {
  //       id: "14",
  //       name: "Practical Granite Salad",
  //       price: 66,
  //       sku: "1a49cc1f-a0f3-485a-8420-233d16dddf22",
  //       inventory: 58,
  //     },
  //     {
  //       id: "15",
  //       name: "Handmade Concrete Fish",
  //       price: 14,
  //       sku: "9dea1336-81e0-41d7-9745-115bc74a6ebf",
  //       inventory: 51,
  //     },
  //     {
  //       id: "16",
  //       name: "Practical Frozen Keyboard",
  //       price: 35,
  //       sku: "1e064291-f395-481f-a34b-bb23044c7d59",
  //       inventory: 39,
  //     },
  //     {
  //       id: "17",
  //       name: "Incredible Fresh Pizza",
  //       price: 30,
  //       sku: "778e3295-660d-4301-bbea-646896c6aabc",
  //       inventory: 24,
  //     },
  //     {
  //       id: "18",
  //       name: "Ergonomic Frozen Table",
  //       price: 62,
  //       sku: "81c1890b-31ab-4012-a681-721c4364eb93",
  //       inventory: 10,
  //     },
  //     {
  //       id: "19",
  //       name: "Gorgeous Metal Tuna",
  //       price: 4,
  //       sku: "9fae1727-3598-444c-8f7f-b8e891b38ae0",
  //       inventory: 99,
  //     },
  //     {
  //       id: "20",
  //       name: "Generic Steel Hat",
  //       price: 78,
  //       sku: "188db062-8cf1-48b1-a7c0-598c53bbf922",
  //       inventory: 53,
  //     },
  //     {
  //       id: "21",
  //       name: "Sleek Steel Shoes",
  //       price: 80,
  //       sku: "d841742f-e7f1-40c3-bc87-176495ac495c",
  //       inventory: 22,
  //     },
  //     {
  //       id: "22",
  //       name: "Fantastic Steel Cheese",
  //       price: 34,
  //       sku: "8eea2eba-74b1-4e7d-b18d-5ea4bdde1860",
  //       inventory: 2,
  //     },
  //     {
  //       id: "23",
  //       name: "Generic Cotton Sausages",
  //       price: 34,
  //       sku: "a8c475db-a50f-4df8-a43b-c735c3f36c96",
  //       inventory: 92,
  //     },
  //     {
  //       id: "24",
  //       name: "Rustic Rubber Soap",
  //       price: 5,
  //       sku: "0b6b4a4a-9733-418d-93b3-60bf4ae0a709",
  //       inventory: 56,
  //     },
  //     {
  //       id: "25",
  //       name: "Practical Granite Sausages",
  //       price: 51,
  //       sku: "83379d8e-9cbc-490b-b1e9-65e026ff77dc",
  //       inventory: 25,
  //     },
  //   ];
  //   dispatchProduct({ type: "set_products", data });
  //   dispatchInvoice({ type: "add_product", data });
  // };

  // React.useEffect(() => {
  //   if (products.length < 1) {
  //     getProducts()
  //       .then(({ data }) => {
  //         // dispatchProduct({ type: "set_products", data });
  //         // dispatchProduct({ type: "sort_products", data });
  //         setProducts(
  //           data.sort((a, b) => {
  //             return a.sku.localeCompare(b.sku);
  //           })
  //         );
  //       })
  //       .catch((error) => {
  //         const alert = {
  //           open: true,
  //           severity: "error",
  //           message: "Fail to retrieve Products",
  //         };
  //         dispatchDisplay({ type: "show_alert", alert });
  //         console.log(`Error: ${JSON.stringify(error)}`);
  //       });
  //   }
  // }, []);

  React.useEffect(() => {
    // Ensure the Invoice is valid, display alert if not
    const { valid, message } = validateInvoice(invoice);
    if (!valid) {
      showAlert({ open: true, severity: "warning", message });
    } else {
      hideAlert();
    }
  }, [showAlert, hideAlert, invoice]);

  const handleChange = (e, index) => {};

  console.log("RENDERED: OrderForm");

  return (
    <TableContainer component={Paper} elevation={3} className="order__form">
      <Table aria-label="order product">
        <OrderTableHeader onClick={handleAddButton} />
        {invoice.length > 0 && (
          <TableBody>
            {invoice.map((product, index) => {
              // const handleRowChange = React.useMemo(
              //   (e) => {
              //     return handleChange(e, index);
              //   },
              //   [index]
              // );

              const handleRowChange = (e) => {
                handleChange(e, index);
              };

              return (
                <ProductRow
                  key={index}
                  index={index}
                  product={product}
                  onChange={handleRowChange}
                />
              );
            })}
            {calculate && (
              <OrderTotals
                invoice={invoice}
                discountRate={contractor.discount}
              />
            )}
          </TableBody>
        )}
      </Table>
      <Snackbar alert={alert} onClose={handleClose} />
    </TableContainer>
  );
};

export default OrderForm;
