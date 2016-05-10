import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../components/app';
import * as Actions from '../actions/vehicle-actions';

const mapStateToProps = (state) => {
  return {
    map: state.map,
    vehicles: state.vehicles,
    ui: state.ui,
  };
};
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
