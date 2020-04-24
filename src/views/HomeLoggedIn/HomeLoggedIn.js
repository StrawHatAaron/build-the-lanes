import React from 'react';
import HeaderLoggedIn from "components/Header/HeaderLoggedIn.js"


// import AdminPage from "views/AdminLoggedIn/AdminPage.js";


export default function HomeLoggedIn() {
  return (
        <div>
            <h1 style={{marginTop:'2em'}}>CSc 174 - Team 3 ⌨️  🖥 🖱</h1>
            <p>You're logged in already!!!</p>
            <HeaderLoggedIn></HeaderLoggedIn>
        </div>
    );
}
