import { updatePropertiesList, errorHandling } from "./propertiesActionCreator";

const generateHeaders = () => {
  return new Headers({
    "Content-Type": "application/json",
    Authorization: "Basic  c2ltcGx5cmV0czpzaW1wbHlyZXRz"
  });
};
const timeoutMs = () => 10000;

export const getPropertiesList = () => dispatch => {
  return Promise.race([
    fetch("https://api.simplyrets.com/properties", {
      method: "get",
      headers: generateHeaders()
    }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), timeoutMs())
    )
  ])
    .then(result => {
      if (result.status >= 400) {
        dispatch(errorHandling("getPropertiesList", "", result.status));
      }
      return result.json();
    })
    .then(items => {
      dispatch(updatePropertiesList(items));
    })
    .catch(err => {
      dispatch(errorHandling("getPropertiesList", "", err));
    });
};
