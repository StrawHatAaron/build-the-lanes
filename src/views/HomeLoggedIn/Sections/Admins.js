import React, {useState} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"
import {AdminsURL} from "utils/ApiConstants.js"

export default function Admins() {

  const [columns, setColumns] = useState({
    Id: "Id",
    Email: "Email",
    PasswordSalt: "Password Salt",
    PasswordHash: "Password Hash",
    Token: "Token",
    FName: "First Name",
    LName: "Last Name",
    Roles: "Roles",
    Title: "Title",
    Created: "Created"
  });

  return (
    <div >
      <Button
        primary color="danger">
        DELETE Users
      </Button>
      <Button
        primary color="warning">
        UPDATE/PUT Users
      </Button>
      <Table
        columns={columns}
        url={AdminsURL}/>
    </div>
  );
}
