import fetch from 'isomorphic-fetch';

export const RECEIVE_VEHICLES = 'RECEIVE_VEHICLES';
function receiveVehicles(data) {
  return {
    type: RECEIVE_VEHICLES,
    routes: data,
  };
}

export const REQUEST_VEHICLES = 'REQUEST_VEHICLES';
function requestVehicles() {
  return {
    type: REQUEST_VEHICLES,
  };
}

export const SELECT_VEHICLE = 'SELECT_VEHICLE';
export function selectVehicle(data) {
  return {
    type: SELECT_VEHICLE,
    vehicle: data,
  };
}

export function fetchVehicles() {
  return dispatch => {
    dispatch(requestVehicles());
    return fetch('http://159.203.216.244:8048/vehicles')
    .then(resp => resp.json())
    .then(json => dispatch(receiveVehicles(json)))
    .catch(err => console.log(err));
  };
}
