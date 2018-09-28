import { connect } from 'react-redux';
import ReachabilityCompenent from './ReachabilityCompenent'

const mapStateToProps = state => {
  const { netInfo } = state
  return {
    netInfo: netInfo,
  };
};

const ReachabilityContainer = connect(mapStateToProps, {})(ReachabilityCompenent);

export default ReachabilityContainer;
