import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../service/api.js";
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
  background-color: darkgrey;
  & > th {
    color: white;
    font-size: 18px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;
const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserDetails = async (id) =>{
    
    await deleteUser(id);
    getAllUsers();

  }
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <TBody key={user._id}>
            <TableCell>{user._id}</TableCell>

            <TableCell>{user.name}</TableCell>

            <TableCell>{user.username}</TableCell>

            <TableCell>{user.email}</TableCell>

            <TableCell>{user.phone}</TableCell>

            <TableCell>
              <Button variant="contained" style={{marginRight:10}}    component = {Link} to={`/edit/${user._id}`}>Edit</Button>
              <Button variant="contained" style={{ backgroundColor: "red" }} onClick={() => deleteUserDetails(user._id)}>
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
