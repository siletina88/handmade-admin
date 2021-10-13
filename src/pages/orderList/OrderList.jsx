import React, { useEffect } from "react";
import "./orderList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getOrders } from "../../redux/apiCalls";
import { format } from "timeago.js";

const ProductList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "products",
      headerName: "Artikli",
      renderCell: (params) => {
        let title = [];
        params.row.products.map((item) => {
          products.map((product) => {
            if (product._id === item.productId) {
              title.push(product.title);
            }
          });
        });
        return <div>{title.join(", ")}</div>;
      },

      width: 500,
      editable: true,
    },

    {
      field: "amount",
      headerName: "Iznos",
      description: "This column has a value getter and is not sortable.",

      width: 150,
    },
    {
      field: "createdAt",
      headerName: "Datum narudzbe",
      description: "This column has a value getter and is not sortable.",
      renderCell: (params) => {
        return (
          <>
            <div className='rowitem'>{format(params.row.createdAt)}</div>
          </>
        );
      },

      width: 150,
    },
    {
      field: "action",
      headerName: "Opcije",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link style={{ textDecoration: "none" }} to={"/order/" + params.row._id}>
              <button className='edit'>
                Edit <Edit className='icon'></Edit>
              </button>
            </Link>

            <button onClick={() => handleDelete(params.row._id)} className='delete'>
              Delete <DeleteOutline className='icon'></DeleteOutline>
            </button>
          </>
        );
      },
    },
  ];

  return (
    <div className='productList'>
      <Link to='/newProduct'>
        <button className='addButton'>Dodaj</button>
      </Link>
      <DataGrid style={{ height: "85vh" }} rows={orders} getRowId={(row) => row._id} columns={columns} pageSize={15} checkboxSelection disableSelectionOnClick />
    </div>
  );
};

export default ProductList;
