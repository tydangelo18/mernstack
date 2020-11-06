import axios from 'axios';
// This action can now be called from anywhere
import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// Register User Action
export const register = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/api/users', formData);
    // If successful
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    // If error
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
