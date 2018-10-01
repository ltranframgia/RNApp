import { connect } from 'react-redux';
import ReachabilityView from './ReachabilityView'

const mapStateToProps = state => {
  const { netInfo } = state
  return {
    netInfo: netInfo,
  };
};

const ReachabilityContainer = connect(mapStateToProps, {})(ReachabilityView);

export default ReachabilityContainer;
