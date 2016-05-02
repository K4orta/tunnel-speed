import {
  INIT_MAP,
} from '../actions/map-actions';

import routeData from '../constants/routes.json';

export default (state = { map: routeData }, action) => {
  switch (action.type) {
    case INIT_MAP:
      return {
        map: action.map,
      };
    default:
      return state;
  }
};
