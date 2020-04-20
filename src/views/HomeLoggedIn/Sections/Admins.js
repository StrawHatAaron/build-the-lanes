import React, {useState, useEffect} from 'react';
import Button from "components/CustomButtons/Button.js";
import Table from "components/Tables/Table.js"


export default function Admins() {

  const [state, setState] = React.useState({
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

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div >
      <Button
        primary color="success">
        SELECT/GET Users
      </Button>
      <Button
        primary color="danger">
        DELETE Users
      </Button>
      <Button
        primary color="warning">
        UPDATE/PUT Users
      </Button>
      <Table columns={state}/>
    </div>
  );
}
