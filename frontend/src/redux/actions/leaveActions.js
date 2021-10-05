import axios from 'axios'
import {
	LEAVE_CREATE_FAIL,
	LEAVE_CREATE_REQUEST,
	LEAVE_CREATE_SUCCESS,
	LEAVE_DETAILS_FAIL,
	LEAVE_DETAILS_REQUEST,
	LEAVE_DETAILS_SUCCESS,
	LEAVE_LIST_FAIL,
	LEAVE_LIST_MY_FAIL,
	LEAVE_LIST_MY_REQUEST,
	LEAVE_LIST_MY_SUCCESS,
	LEAVE_LIST_REQUEST,
	LEAVE_LIST_SUCCESS,
} from '../constants/leaveConstants'
//

// List all leaves (Admin)
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

// List logged in users leaves
export const listMyLeaves = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: LEAVE_LIST_MY_REQUEST,
		})

		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		const { data } = await axios.get(`/api/leaves/myleaves`, config)

		dispatch({
			type: LEAVE_LIST_MY_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: LEAVE_LIST_MY_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

// Create a leave
export const createLeave =
	(fromDate, toDate, reason, type) => async (dispatch, getState) => {
		try {
			dispatch({
				type: LEAVE_CREATE_REQUEST,
			})

			const {
				userLogin: { userInfo },
			} = getState()

			const config = {
				headers: {
					Authorization: `Bearer ${userInfo.token}`,
				},
			}

			const { data } = await axios.post(
				'/api/leaves',
				{
					fromDate,
					toDate,
					reason,
					type,
				},
				config
			)

			dispatch({
				type: LEAVE_CREATE_SUCCESS,
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: LEAVE_CREATE_FAIL,
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error.message,
			})
		}
	}

// Leave Details
export const getLeaveDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: LEAVE_DETAILS_REQUEST,
		})

		const {
			userLogin: { userInfo },
		} = getState()

		const config = {
			headers: {
				//   'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		}

		const { data } = await axios.get(`/api/leaves/${id}`, config)

		dispatch({
			type: LEAVE_DETAILS_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: LEAVE_DETAILS_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}
