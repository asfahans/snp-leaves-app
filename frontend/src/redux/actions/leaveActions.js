import axios from 'axios'
import {
  LEAVE_LIST_FAIL,
  LEAVE_LIST_REQUEST,
  LEAVE_LIST_SUCCESS,
} from '../constants/userConstants'
//

// LIST USERS
export const listLeaves = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: LEAVE_LIST_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/leaves`, config)

    dispatch({
      type: LEAVE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: LEAVE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
