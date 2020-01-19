import {
  UPDATE_PROPERTIES_LIST,
  API_CALL_FAILED
} from "../Actions/propertiesActionCreator";

const initialState = {
  propertiesList: [],
  apiError: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_PROPERTIES_LIST:
      return {
        ...state,
        propertiesList: payload.list
      };
    case API_CALL_FAILED:
      return {
        ...state,
        apiError: payload
      };
    default:
      return state;
  }
};
