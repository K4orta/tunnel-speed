import {
  RECEIVE_VEHICLES,
} from '../actions/vehicle-actions';
import Immutable from 'immutable';

export default (state = { vehicles: [] }, action) => {
  switch (action.type) {
    case RECEIVE_VEHICLES:
      return Object.assign({}, { vehicles: action.routes });
    default:
      return state;
  }
};
