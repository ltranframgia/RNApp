import { connect } from 'react-redux';
// import { } from '../actions';
import CalendarComponent from '../component/CalendarComponent'

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  return {
  };
};

const CalendarContainer = connect(
  mapStateToProps,
  {
  }
)(CalendarComponent);

export default CalendarContainer;
