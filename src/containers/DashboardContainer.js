import { connect } from 'react-redux';
// import { } from '../actions';
import DashboardComponent from '../component/DashboardComponent'

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  return {
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  {
  }
)(DashboardComponent);

export default DashboardContainer;
