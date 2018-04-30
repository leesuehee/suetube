import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.jsx';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.jsx';
import Nav from './Nav.jsx';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    store.dispatch(changeVideo(exampleVideoData[0]));
    store.dispatch(changeVideoList(exampleVideoData));
  }

  render() {
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer/>
          </div>
          <div className="col-md-5">
            <VideoListContainer/>
          </div>
        </div>
      </div>
    );
  }
}
