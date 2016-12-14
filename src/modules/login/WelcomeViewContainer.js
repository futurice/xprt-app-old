import {connect} from 'react-redux';
import WelcomeView from './WelcomeView';
import * as NavigationState from '../navigation/NavigationState';

export default connect(
  state => ({}),
  dispatch => ({
    register() {
      dispatch(NavigationState.pushRoute({
        key: 'TeacherRegister',
        title: 'Register (Teacher)'
      }));
    },
    login() {
      dispatch(NavigationState.pushRoute({
        key: 'TeacherLogin',
        title: 'Login (Teacher)'
      }));
    },
    browse() {
      dispatch(NavigationState.switchTab(1));
    }
  })
)(WelcomeView);
