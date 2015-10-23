import {
  ACTION
} from '../actions/action';

export default (state = {msg: 'Hello World'}, action) => {
  switch (action.type) {
    case ACTION:
      return {
        msg: action.msg
      };
    default:
      return state;
  }
};
