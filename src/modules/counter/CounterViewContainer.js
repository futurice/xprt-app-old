import {connect} from 'react-redux';
import CounterView from './CounterView';

export default connect(
  state => ({
    counter: state.counter.value,
    loading: state.counter.loading,
    userName: state.auth.currentUser.name,
    userProfilePhoto: state.currentUser.picture
  })
)(CounterView);
