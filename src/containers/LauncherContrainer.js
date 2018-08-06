import { connect } from 'react-redux';
import { addCounter } from '../actions/index';

import LaunchComponent from '../component/LaunchComponent'

const mapStateToProps = state => {
  console.log(state)
  return {
    text: state.Counter.text,
    id: state.Counter.id
  };
};

const LaunchContainer = connect(
  mapStateToProps,
  {
    addCounter
  }
)(LaunchComponent);

export default LaunchContainer;
