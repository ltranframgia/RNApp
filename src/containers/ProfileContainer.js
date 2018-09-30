import { connect } from 'react-redux';
// import { } from '../actions';
import ProfileComponent from '../component/ProfileComponent'

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  return {
  };
};

const ProfileContainer = connect(
  mapStateToProps,
  {
  }
)(ProfileComponent);

export default ProfileContainer;
