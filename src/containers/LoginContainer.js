import { connect } from 'react-redux';
import { login } from '../actions';
import LoginComponent from '../component/LoginComponent'

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  const { user } = state
  return {
    user: user,
    // responseError: appInfo.responseError
  };
};

const LoginContainer = connect(
  mapStateToProps,
  {
    login,
  }
)(LoginComponent);

export default LoginContainer;
