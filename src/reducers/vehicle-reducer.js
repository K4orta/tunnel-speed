import {
  RECEIVE_VEHICLES,
} from '../actions/vehicle-actions';
import Immutable from 'immutable';
import calculateDistance from '../utils/vehicle-distance';

export default (state = Immutable.List(), action) => {
  switch (action.type) {
    case RECEIVE_VEHICLES:
      return Immutable.fromJS(action.routes)
        .toSeq()
        .filter(v =>
          v.get('leadingVehicleId') === '' &&
          v.get('predictable') === true
        )
        .map(calculateDistance);
    default:
      return state;
  }
};
