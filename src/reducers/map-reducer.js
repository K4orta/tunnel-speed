import {
  INIT_MAP
} from '../actions/map-actions';

export default (state = {map: undefined}, action) => {
  switch (action.type) {
    case INIT_MAP:
      return {
        map: action.map
      };
    default:
      return state;
  }
};
