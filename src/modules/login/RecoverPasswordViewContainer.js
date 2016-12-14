import {connect} from 'react-redux';
import RecoverPasswordView from './RecoverPasswordView';
import * as NavigationState from '../navigation/NavigationState';

export default connect(
  state => ({}),
  dispatch => ({
    back() {
      dispatch(NavigationState.popRoute());
    }
  })
)(RecoverPasswordView);
