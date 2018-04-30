import Redux from 'redux';

var currentVideo = (state = null, action) => {
  switch(action.type) {
    case 'CHANGE_VIDEO':
      return action.video || null 
    default: 
      return state;
  }  
};

export default currentVideo;
