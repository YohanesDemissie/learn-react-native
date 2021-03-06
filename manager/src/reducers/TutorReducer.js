import {
TUTORS_FETCH_SUCCESS
} from '../actions/types'
import TutorCreate from '../components/TutorCreate';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TUTORS_FETCH_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};