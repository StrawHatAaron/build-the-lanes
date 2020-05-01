import { BehaviorSubject } from 'rxjs';

import {AuthenticateUserURL} from 'utils/ApiConstants';
import { handleResponse } from 'helpers/handle-response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    signin,
    signOut,
    signedIn,
};

function signin(email, password) {
  console.log("auth service trying to sign in.");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "email":email, "password":password })
    };

    return fetch(AuthenticateUserURL, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem(signedIn(), true);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('token', user["token"]);
            localStorage.setItem('f_name', user['f_name']);
            return user;
        });
}

function signOut() {
    console.log("auth service trying to sign out.");
    localStorage.setItem(signedIn(), false);
}

function signedIn(){
  return 'singedIn'
}
