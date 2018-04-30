import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.jsx';

var mapStateToProps = (state) => ({
    video : state.currentVideo
});

var mapDispatchToProps = (dispatch) => ({ });

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

export default VideoPlayerContainer;
