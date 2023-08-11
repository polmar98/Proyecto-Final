import axios from "axios";

export const FETCH_ACTIVITYS = "FETCH_ACTIVITYS";
export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const GET_ACTIVITY_BY_ID = "GET_ACTIVITY_BY_ID";
export const SEARCH_ACTIVITYS = "SEARCH_ACTIVITYS";
export const ADD_ACTIVITYS = "ADD_ACTIVITYS"
export const PUT_ACTIVITY = "PUT_ACTIVITY"

export const fetchActivitys = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3002/activity");
      const data = response.data;
      return dispatch({
        type: FETCH_ACTIVITYS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const put_activity = (idActivity, item) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3002/activity/update/${idActivity}`,
        item
      );
      const data = response.data;
      console.log(data);
      return dispatch({
        type: PUT_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addActivity = (newActivity) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/activitys",
        newActivity
      );
      const data = response.data;
      return dispatch({
        type: ADD_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addActivities = (newActivities) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/activity/massive",
        newActivities
      );
      const data = response.data;
      return dispatch({
        type: ADD_ACTIVITYS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getActivityById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3002/activitys/${id}`);
      const data = response.data;
      return dispatch({
        type: GET_ACTIVITY_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const searchActivitys = (word) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/activitys?title=${encodeURIComponent(word)}`
      );
      const data = response.data;
      return dispatch({
        type: SEARCH_ACTIVITYS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};


