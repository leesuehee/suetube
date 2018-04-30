import React from 'react';
import Search from './../components/Search.jsx';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

var mapStateToProps = (state) => ({ });

var mapDispatchToProps = (dispatch) => ({
  handleSearchInputChange: (q) => {
    dispatch(handleVideoSearch(q))
  }
});

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;

//TODO: define a SearchContainer component which
// will hook up your action dispatchers with your 
// search component props.
