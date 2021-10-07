import React, { useState } from 'react'
import './productList.scss'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { productRows } from '../../dummyData'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [data, setData] = useState(productRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'product',
      headerName: 'Artikal',
      renderCell: (params) => {
        return (
          <div className="product">
            <img className="img" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      },
      width: 200,
      editable: true,
    },
    {
      field: 'stock',
      headerName: 'Na stanju',
      width: 200,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 140,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Cijena',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Opcije',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="edit">Edit</button>
            </Link>
            <DeleteOutline
              onClick={() => handleDelete(params.row.id)}
              className="delete"
            ></DeleteOutline>
          </>
        )
      },
    },
  ]

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList
