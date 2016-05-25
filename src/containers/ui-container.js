import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import * as Actions from '../actions/vehicle-actions';
import UILayer from '../components/ui/ui-layer';

const mapStateToProps = (state) => {
  return {
    ui: Immutable.Map({
      selectedVehicle: state.vehicles.get('selectedVehicle'),
    }),
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UILayer);
