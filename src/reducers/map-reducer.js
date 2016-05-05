import {
  INIT_MAP,
} from '../actions/map-actions';

import routeData from '../constants/routes.json';
import Immutable from 'immutable';

export default (state = Immutable.fromJS(routeData), action) => {
  switch (action.type) {
    case INIT_MAP:
      return {
        map: action.map,
      };
    default:
      return state;
  }
};
