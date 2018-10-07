import { connect } from 'react-redux';
// import { } from '../actions';
import AgendaComponent from '../component/AgendaComponent'

const mapStateToProps = state => {
  console.log('mapStateToProps')
  console.log(state)
  return {
  };
};

const AgendaContainer = connect(
  mapStateToProps,
  {
  }
)(AgendaComponent);

export default AgendaContainer;
