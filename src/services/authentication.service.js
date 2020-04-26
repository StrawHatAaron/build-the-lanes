import { BehaviorSubject } from 'rxjs';

import {AuthenticateUserURL} from 'utils/ApiConstants';
import { handleResponse } from 'helpers/handle-response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authenticationService = {
    login,
    logout,
    get loggedIn () { localStorage.getItem('loggedIn') }
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "email":email, "password":password })
    };

    return fetch("http://localhost:4000/apiv1/users/authenticate", requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('loggedIn', true);
            return user;
        });
}

function logout() {
    localStorage.setItem('loggedIn', false);
}
