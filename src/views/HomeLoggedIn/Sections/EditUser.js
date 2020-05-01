import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";
import {DatabasePages} from 'components/Header/HeaderLinks';
import {history} from 'helpers/history';
import {CssTextField} from "assets/jss/Constants.js";
import {UsersSignUpM, UsersM, Header} from 'views/HomeLoggedIn/Models.js';
import {UserURL} from "utils/ApiConstants.js";


export default function EditUser(){

  const [input, setInput] = useState({});
  const handleChange = (event) => {
    setState({...input, [event.target.name]:[event.target.value]})
  }

  const [state, setState] = useState({});
  useEffect(() => {
    const userId = window.location.hash.split('/')[3];
    console.log('split:', window.location.hash.split('/'));
    console.log('userId:', userId);

    fetch(UserURL+userId, {
      method: 'GET',
      headers:  Headers
      })
    .then((response) => response.json())
    .then((state) => {
      setState(state);
      console.log('state:', state)
      console.log('id',state['id'])
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, []);

  function putData(url){
    fetch(UserURL, {
      method: 'PUT',
      headers:  Headers,
      body:input
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Data:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  return(
    <div>
      <Link onClick={history.goBack}>
        <Button style={{
          borderRadius:"35px", fontSize:"1.5rem"}}>
          ⇦
        </Button>
      </Link>
      <h1>
        Enter new desired User values
      </h1>

      <div>Id current value: {state['id']} </div>
      <CssTextField
        disabled
        variant="outlined"
        margin="normal"
        id="id"
        label="can't edit value"
        name="id"
        onChange={handleChange}/>

      <div>Email current value: {state['email']}</div>
      <CssTextField
        disabled
        variant="outlined"
        margin="normal"
        id="email"
        label="can't edit value"
        name="email"
        onChange={handleChange}/>

      <div>Roles current value: {state['Roles']}</div>
      <CssTextField
        disabled
        variant="outlined"
        margin="normal"
        id="Roles"
        label="Roles"
        name="Roles"
        onChange={handleChange}/>

      <div>Password current value: ****</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="password"
        label="Password"
        onChange={handleChange}/>

      <div>token current value: {state['token']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="token"
        label="Token"
        name="token"
        onChange={handleChange}/>

      <div>First Name current value: {state['fName']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="fName"
        label="First Name"
        name="fName"
        onChange={handleChange}/>

      <div>Last Name current value: {state['lName']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="lName"
        label="Last Name"
        name="lName"
        onChange={handleChange}/>

      <div>Amount Donated current value: {state['amountDonated']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="Amount Donated"
        name="amountDonated"
        type="number"
        onChange={handleChange}/>

      <div>Title current value: {state['Title']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="title"
        label="Title"
        name="title"
        onChange={handleChange}/>

      <div>Type current value: {state['Type']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="type"
        label="Type"
        name="type"
        onChange={handleChange}/>

      <div>Created current value: {state['Created']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="Created"
        name="Created"
        label="Created"
        type="datetime-local"
        defaultValue="2017-05-24T09:18:54.092Z"
        InputLabelProps={{shrink: true,}}
        onChange={handleChange}/>

      <Button
        onClick={() => putData(UserURL)}
        primary color="warning">
        UPDATE/PUT
      </Button>
    </div>
  )
}
