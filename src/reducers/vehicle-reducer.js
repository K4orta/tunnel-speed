import {
  RECEIVE_VEHICLES,
  SELECT_VEHICLE,
} from '../actions/vehicle-actions';
import Immutable from 'immutable';
import calculateDistance from '../utils/vehicle-distance';

export default (state = Immutable.fromJS({ vehicles: [], selectedVehicle: undefined }), action) => {
  let vhe;
  switch (action.type) {
    case SELECT_VEHICLE:
      return state.set('selectedVehicle', action.vehicle);
    case RECEIVE_VEHICLES:
      vhe = state.set('vehicles', Immutable.fromJS(action.routes)
        .toSeq()
        .filter(v =>
          v.get('leadingVehicleId') === '' &&
          v.get('predictable') === true
        )
        .map(calculateDistance)
      );

      if (state.get('selectedVehicle') !== undefined) {
        vhe = vhe.set('selectedVehicle', vhe.get('vehicles')
          .find((v) => v.get('id') === state.get('selectedVehicle').get('id'))
        );
      }

      return vhe;
    default:
      return state;
  }
};
