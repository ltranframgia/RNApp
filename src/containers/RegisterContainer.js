import { connect } from 'react-redux';
// import { } from '../actions';
import RegisterComponent from '../component/RegisterComponent'

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  return {
  };
};

const RegisterContainer = connect(
  mapStateToProps,
  {
  }
)(RegisterComponent);

export default RegisterContainer;
