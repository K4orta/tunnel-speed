import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/vehicle-actions';
import Map from '../components/map/map';

const mapStateToProps = (state) => {
  return {
    map: state.map,
    vehicles: state.vehicles.get('vehicles'),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
