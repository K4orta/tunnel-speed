import {
  RECEIVE_VEHICLES,
} from '../actions/vehicle-actions';
import Immutable from 'immutable';

export default (state = Immutable.List(), action) => {
  switch (action.type) {
    case RECEIVE_VEHICLES:
      return Immutable.fromJS(action.routes);
    default:
      return state;
  }
};
