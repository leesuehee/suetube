import { connect } from 'react-redux';
import VideoList from '../components/VideoList.jsx';
import changeVideo from '../actions/currentVideo.js';

let mapStateToProps = (state) => ({
  videos : state.videoList
});

let mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryClick: (video) => {
    dispatch(changeVideo(video));
  }
});
  
var VideoListContainer = connect(mapStateToProps,mapDispatchToProps)(VideoList)

export default VideoListContainer;
