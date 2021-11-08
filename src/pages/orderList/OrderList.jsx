import React, { useEffect } from "react";
import "./orderList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, deleteProduct, getOrders } from "../../redux/apiCalls";
import { format } from "timeago.js";

const ProductList = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  const products = useSelector((state) => state.product.products);
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "products",
      headerName: "Artikli",
      renderCell: (params) => {
        let title = [];
        params.row.products.map((item) => {
          products.map((product) => {
            if (product._id === item._id) {
              title.push(product.title);
            }
          });
        });
        return <div>{title.join(", ")}</div>;
      },

      width: 200,
      editable: true,
    },

    {
      field: "userId",
      headerName: "Korisnik",
      renderCell: (params) => {
        let title = "";

        users.map((user) => {
          if (user._id === params.row.userId) {
            title = user.username;
          }
        });
        return <div>{title}</div>;
      },

      width: 200,
      editable: true,
    },

    {
      field: "total",
      headerName: "Iznos",

      width: 100,
    },
    {
      field: "createdAt",
      headerName: "Datum narudzbe",

      renderCell: (params) => {
        return (
          <>
            <div className='rowitem'>{format(params.row.createdAt)}</div>
          </>
        );
      },

      width: 200,
    },
    {
      field: "address",
      headerName: "Adresa",

      width: 200,
    },
    {
      field: "status",
      headerName: "Status",

      renderCell: (params) => {
        return (
          <>
            <div className={"rowStatus " + `${params.row.status}`}>{params.row.status}</div>
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
      <DataGrid style={{ height: "85vh" }} rows={orders} getRowId={(row) => row._id} columns={columns} pageSize={15} checkboxSelection disableSelectionOnClick />
    </div>
  );
};

export default ProductList;
