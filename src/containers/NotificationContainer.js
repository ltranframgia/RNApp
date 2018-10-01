import { connect } from 'react-redux';
// import { } from '../actions';
import NotificationComponent from '../component/NotificationComponent'

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  return {
  };
};

const NotificationContainer = connect(
  mapStateToProps,
  {
  }
)(NotificationComponent);

export default NotificationContainer;
