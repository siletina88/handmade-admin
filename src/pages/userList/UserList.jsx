import "./userList.scss";
import { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, deleteUser } from "../../redux/apiCalls";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  console.log(users);
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "user",
      headerName: "Korisnik",
      renderCell: (params) => {
        return (
          <div className='user'>
            <img className='img' src={params.row.img} alt='' />
            {params.row.username + " " + (params.row.isAdmin ? "(ADMIN)" : "")}
          </div>
        );
      },
      width: 200,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Puno ime",
      width: 140,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Broj telefona",
      width: 140,
      editable: true,
    },
    {
      field: "address",
      headerName: "Adresa",
      width: 140,
      editable: true,
    },

    {
      field: "transaction",
      headerName: "Transakcije",
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
            <Link style={{ textDecoration: "none" }} to={"/user/" + params.row._id}>
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
    <div className='userList'>
      <Link to='/newUser'>
        <button className='addButton'>Dodaj</button>
      </Link>
      <DataGrid style={{ height: "85vh" }} rows={users} getRowId={(row) => row._id} columns={columns} pageSize={10} checkboxSelection disableSelectionOnClick />
    </div>
  );
};

export default UserList;
