export const UPDATE_PROPERTIES_LIST = "properties :: update list";
export const API_CALL_FAILED = "apiCall :: FAILED";

export const updatePropertiesList = value => ({
  type: UPDATE_PROPERTIES_LIST,
  payload: { list: value }
});

export const errorHandling = (method, body, error) => {
  const returnError = {
    type: API_CALL_FAILED,
    payload: {
      method: method,
      body: body,
      message: `Unexpected Error. ${
        error.message !== undefined ? error.message : error
      }`
    }
  };
  return returnError;
};
