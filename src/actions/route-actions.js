import fetch from 'isomorphic-fetch';

export const RECEIVE_ROUTES = 'RECEIVE_ROUTES';
function receiveRoutes(data) {
  return {
    type: RECEIVE_ROUTES,
    routes: data,
  };
}

export const REQUEST_ROUTES = 'REQUEST_ROUTES';
function requestRoutes() {
  return {
    type: REQUEST_ROUTES,
  };
}

export function fetchRoutes() {
  return dispatch => {
    dispatch(requestRoutes());
    return fetch()
      .then(resp => resp.json())
      .then(json => {
        dispatch(receiveRoutes(json));
      });
  };
}
