import Redux from 'redux';

var currentVideo = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch(action.type) {
    case 'CHANGE_VIDEO':
      return action.video || null 
    default: 
      return state;
  }  
};
  // always takes in current state and an action
  // if no action is performed original state is returned

export default currentVideo;
