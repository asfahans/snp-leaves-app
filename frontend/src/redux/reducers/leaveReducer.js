import {
  LEAVE_LIST_FAIL,
  LEAVE_LIST_REQUEST,
  LEAVE_LIST_SUCCESS,
} from '../constants/userConstants'

export const leaveListReducer = (state = { leaves: [] }, action) => {
  switch (action.type) {
    case LEAVE_LIST_REQUEST:
      return { loading: true, leaves: [] }
    case LEAVE_LIST_SUCCESS:
      return { loading: false, leaves: action.payload }
    case LEAVE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
