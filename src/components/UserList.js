import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const UserList = ({ users, title }) => (
  <div>
    <h1 className="title">{title}</h1>
    <Paper className="container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Mobile Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(({ id, name, age, email, gender, phoneNo }) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell numeric>{name}</TableCell>
              <TableCell numeric>{age}</TableCell>
              <TableCell numeric>{email}</TableCell>
              <TableCell numeric>{gender}</TableCell>
              <TableCell numeric>{phoneNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default UserList;
