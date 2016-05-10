import { combineReducers } from 'redux';
import map from './map-reducer';
import vehicles from './vehicle-reducer';
import ui from './ui-reducer';

export default combineReducers({ map, vehicles, ui });
