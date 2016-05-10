import {
  SELECT_VEHICLE,
} from '../actions/vehicle-actions';
import Immutable from 'immutable';

export default (state = Immutable.Map({
  selectedVehicle: undefined,
}), action) => {
  switch (action.type) {
    case SELECT_VEHICLE:
      return state.set('selectedVehicle', action.vehicle);
    default:
      return state;
  }
};
