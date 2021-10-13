import React, { useEffect } from "react";
import "./productList.scss";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Artikal",
      renderCell: (params) => {
        return (
          <div className='product'>
            <img className='img' src={params.row.img} alt='' />
            {params.row.title}
          </div>
        );
      },
      width: 250,
      editable: true,
    },
    {
      field: "inStock",
      headerName: "Na stanju",
      width: 150,
      editable: true,
    },

    {
      field: "price",
      headerName: "Cijena",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
    },
    {
      field: "action",
      headerName: "Opcije",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link style={{ textDecoration: "none" }} to={"/product/" + params.row._id}>
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
      <DataGrid rows={products} getRowId={(row) => row._id} columns={columns} pageSize={10} checkboxSelection disableSelectionOnClick />
    </div>
  );
};

export default ProductList;
