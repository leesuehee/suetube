import Redux from 'redux';

var videoList = (state = [], action) => {
  switch(action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos;
    default:
      return state;
  }
};

export default videoList;
