import { connect } from 'react-redux';
import { getAppInfo, getUserInfo } from '../actions';

import LaunchComponent from '../component/LaunchComponent'

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  const { appInfo, user } = state
  return {
    appInfo: appInfo,
    user: user,
    // responseError: appInfo.responseError
  };
};

const LaunchContainer = connect(
  mapStateToProps,
  {
    getAppInfo,
    getUserInfo
  }
)(LaunchComponent);

export default LaunchContainer;
