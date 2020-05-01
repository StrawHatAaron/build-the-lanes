import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";
import {DatabasePages} from 'components/Header/HeaderLinks';
import {history} from 'helpers/history';
import {CssTextField} from "assets/jss/Constants.js";
import {UsersSignUpM, UsersM, Headers} from 'views/HomeLoggedIn/Models.js';
import {UserURL} from "utils/ApiConstants.js";


export default function EditUser(){

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
    .then((data) => {
      setState(data);
      console.log('data:', data)
      console.log('id',data['id'])
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }, []);


  const [inputU, setInputU] = useState({});
  useEffect(() => {
    setInputU({
      ...inputU,
      ['Email']:state['email'],
      ['Roles']:state['roles'],
    });
  }, [state])
  const handleChange = (event) => {
    console.log('is this even getting called')
    setInputU({...inputU, [event.target.name]:event.target.value})
    console.log(inputU);
  }

  function putData(url, data){
    if(data.AmountDonated != null){
      data.AmountDonated = parseInt(data.AmountDonated);
    }
    if(data.Created!= null){
      data.Created = new Date(data.Created).toISOString()
    }
    console.log("putData, inputU:", inputU);
    fetch(UserURL, {
      method: 'PUT',
      headers:  Headers,
      body:JSON.stringify(data),
    })
    .then((response) => {
      console.log('response:', response);
      if(response.status===200){
        alert("Success");
      } else {
        alert("Error");  
      }
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
        name="Id"
        label="can't edit value"
        defaultValue={state['id']}
        onChange={handleChange}/>

      <div>Email current value: {state['email']}</div>
      <CssTextField
        disabled
        variant="outlined"
        margin="normal"
        id="email"
        name="Email"
        label="can't edit value"
        onChange={handleChange}/>

      <div>Roles current value: {state['roles']}</div>
      <CssTextField
        disabled
        variant="outlined"
        margin="normal"
        id="Roles"
        name="Roles"
        label="Roles"
        onChange={handleChange}/>

      <div>Password current value: ****</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="password"
        name="Password"
        label="Password"
        onChange={handleChange}/>

      <div>token current value: {state['token']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="token"
        name="Token"
        label="Token"
        onChange={handleChange}/>

      <div>First Name current value: {state['fName']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="fName"
        label="First Name"
        name="FName"
        onChange={handleChange}/>

      <div>Last Name current value: {state['lName']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="LName"
        label="Last Name"
        name="LName"
        onChange={handleChange}/>

      <div>Enter Amount Donated </div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="Amount Donated"
        name="AmountDonated"
        type="number"
        onChange={handleChange}/>

      <div>Title current value: {state['title']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="title"
        name="Title"
        label="Title"
        onChange={handleChange}/>

      <div>Type current value: {state['type']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="type"
        name="Type"
        label="Type"
        onChange={handleChange}/>

      <div>Created current value: {state['Created']}</div>
      <CssTextField
        variant="outlined"
        margin="normal"
        id="Created"
        label="Created"
        name="Created"
        type="datetime-local"
        defaultValue="2017-05-24T09:18:54.092Z"
        InputLabelProps={{shrink: true,}}
        onChange={handleChange}/>

      <Button
        onClick={() => putData(UserURL, inputU)}
        primary color="warning">
        UPDATE/PUT
      </Button>
    </div>
  )
}
