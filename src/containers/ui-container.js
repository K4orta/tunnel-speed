import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/vehicle-actions';
import UILayer from '../components/ui/ui-layer';

const mapStateToProps = (state) => {
  return {
    ui: state.ui,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UILayer);
