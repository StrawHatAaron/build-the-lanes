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
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "email":email, "password":password })
    };

    return fetch("http://localhost:4000/apiv1/users/authenticate", requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem(signedIn(), true);

            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            return user;
        });
}

function signOut() {
    localStorage.setItem(signedIn(), false);
}

function signedIn(){
  return 'singedIn'
}
