import { combineReducers } from 'redux';
import map from './map-reducer';
import vehicles from './vehicle-reducer';

export default combineReducers({ map, vehicles });
