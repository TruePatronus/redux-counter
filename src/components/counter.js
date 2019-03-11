import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h2>{ counter }</h2>
      <button
        onClick={inc}
        className="btn-primary btn-lg">INC</button>
      <button
        onClick={dec}
        className="btn-primary btn-lg">DEC</button>
      <button
        onClick={rnd}
        className="btn-primary btn-lg">RND</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter:state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps, actions)(Counter);