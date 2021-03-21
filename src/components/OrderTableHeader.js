import React from "react";
import Skeleton from "react-loading-skeleton";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { getProducts } from "../api/productApi";
import { useDisplayDispatch } from "../context/displayContext";
import { useInvoiceDispatch } from "../context/invoiceContext";
import { useProductDispatch } from "../context/productContext";

const OrderTableHeader = () => {
  console.log("RENDERED: OrderTableHeader");
  const { addProduct } = useInvoiceDispatch();
  const { hideTotal } = useDisplayDispatch();
  const { showAlert } = useDisplayDispatch();
  const { setProducts } = useProductDispatch();
  const [loading, setLoading] = React.useState(false);

  const handleAddButton = (e) => {
    e.preventDefault();
    hideTotal();
    addProduct();
  };

  React.useEffect(() => {
    setLoading(true);
    getProducts()
      .then(({ data }) => {
        if (data.length > 0) {
          data.sort((a, b) => {
            return a.sku.localeCompare(b.sku);
          });
          hideTotal();
          setProducts(data);
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
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">
          {loading ? (
            <Skeleton circle={true} height={35} width={35} />
          ) : (
            <Fab
              size="small"
              color="primary"
              aria-label="add to invoice"
              onClick={handleAddButton}
            >
              <AddShoppingCartIcon />
            </Fab>
          )}
        </TableCell>
        <TableCell align="center" colSpan={3}>
          Order Form
        </TableCell>
        <TableCell align="right">Price</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Part No.</TableCell>
        <TableCell>Desc</TableCell>
        <TableCell align="right">Qty.</TableCell>
        <TableCell align="right">Unit</TableCell>
        <TableCell align="right">Sum</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default React.memo(OrderTableHeader);
