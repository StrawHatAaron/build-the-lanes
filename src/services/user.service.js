import { UserURL } from 'utils/ApiConstants';
import { handleResponse } from 'helpers/handle-response';
import { authHeader } from 'helpers/auth-header';

export const userService = {
    getAll,
    getById
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(UserURL, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${UserURL}/${id}`, requestOptions).then(handleResponse);
}
