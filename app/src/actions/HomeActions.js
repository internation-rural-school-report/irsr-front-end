import axios from "axios";
import { AdminIssuesAddress } from "../utils/parameters";

export const PENDING_GET_ISSUES = "PENDING_GET_ISSUES";
export const SUCCESS_GET_ISSUES = "SUCCESS_GET_ISSUES";
export const ERROR_GET_ISSUES = "ERROR_GET_ISSUES";

export const getIssues = _ => dispatch => {
  dispatch({ type: PENDING_GET_ISSUES });
  const token = localStorage.getItem('jwt')
  const options = {
      headers: {
          Authorization: token,
      },
  };
  axios
    .get(AdminIssuesAddress, options)
    .then(({ data }) => {
      dispatch({ type: SUCCESS_GET_ISSUES, payload: data });
    })
    .catch(err => {
      dispatch({ type: ERROR_GET_ISSUES, payload: err });
    });
};
