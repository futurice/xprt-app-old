import {connect} from 'react-redux';
import ExpertsView from './ExpertsView';
import rest from '../../services/rest';

export default connect(
  state => ({
    experts: state.experts
  }),
  dispatch => ({
    getExperts() {
      dispatch(rest.actions.experts());
    }
  })
)(ExpertsView);
