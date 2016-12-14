import {connect} from 'react-redux';
import TeacherLogin from './TeacherLoginView';
import * as NavigationState from '../navigation/NavigationState';

export default connect(
  state => ({}),
  dispatch => ({
    forgot() {
      dispatch(NavigationState.pushRoute({
        key: 'TeacherRecoverPw',
        title: 'Forgot Password (Teacher)'
      }));
    }
  })
)(TeacherLogin);
