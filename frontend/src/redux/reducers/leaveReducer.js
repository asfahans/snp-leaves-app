import {
	LEAVE_LIST_REQUEST,
	LEAVE_LIST_SUCCESS,
	LEAVE_LIST_FAIL,
	LEAVE_CREATE_REQUEST,
	LEAVE_CREATE_SUCCESS,
	LEAVE_CREATE_FAIL,
	LEAVE_CREATE_RESET,
	LEAVE_LIST_MY_REQUEST,
	LEAVE_LIST_MY_SUCCESS,
	LEAVE_LIST_MY_FAIL,
	LEAVE_DETAILS_REQUEST,
	LEAVE_DETAILS_SUCCESS,
	LEAVE_DETAILS_FAIL,
} from '../constants/leaveConstants'

// List all leaves
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

// List logged in user's leaves
export const leaveListMyReducer = (state = { leaves: [] }, action) => {
	switch (action.type) {
		case LEAVE_LIST_MY_REQUEST:
			return { loading: true, leaves: [] }
		case LEAVE_LIST_MY_SUCCESS:
			return { loading: false, leaves: action.payload }
		case LEAVE_LIST_MY_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

// Apply for leave
export const leaveCreateReducer = (state = {}, action) => {
	switch (action.type) {
		case LEAVE_CREATE_REQUEST:
			return { loading: true }
		case LEAVE_CREATE_SUCCESS:
			return { loading: false, success: true, leave: action.payload }
		case LEAVE_CREATE_FAIL:
			return { loading: false, error: action.payload }
		case LEAVE_CREATE_RESET:
			return {}
		default:
			return state
	}
}

// Leave Details
export const leaveDetailsReducer = (state = { leave: {} }, action) => {
	switch (action.type) {
		case LEAVE_DETAILS_REQUEST:
			return { ...state, loading: true }
		case LEAVE_DETAILS_SUCCESS:
			return { loading: false, leave: action.payload }
		case LEAVE_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
