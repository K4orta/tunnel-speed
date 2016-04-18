import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../components/component';
import * as Actions from '../actions/map-actions';

const mapStateToProps = (state) => state.reducer;
const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component);
