import './userList.scss'
import { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline, Edit } from '@material-ui/icons'
import { userRows } from '../../dummyData'
import { Link } from 'react-router-dom'

const UserList = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'user',
      headerName: 'Korisnik',
      renderCell: (params) => {
        return (
          <div className="user">
            <img className="img" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
      },
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
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
      field: 'transaction',
      headerName: 'Transakcije',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Opcije',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link
              style={{ textDecoration: 'none' }}
              to={'/user/' + params.row.id}
            >
              <button className="edit">
                Edit <Edit className="icon"></Edit>
              </button>
            </Link>

            <button
              onClick={() => handleDelete(params.row.id)}
              className="delete"
            >
              Delete <DeleteOutline className="icon"></DeleteOutline>
            </button>
          </>
        )
      },
    },
  ]

  return (
    <div className="userList">
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

export default UserList
