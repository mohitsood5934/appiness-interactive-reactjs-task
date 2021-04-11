import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";

const UserList = ({ users, title }) => (
  <>
    <Paper style={{ marginTop: "6rem" }}>
      <Typography component="h1" variant="h5" align="center">
        {title}
      </Typography>
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
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{age}</TableCell>
              <TableCell>{gender}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{phoneNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </>
);

export default UserList;
