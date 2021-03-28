import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { addpeople } from "./Store";

export const getdata = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].email;
  } catch (e) {
    console.log(e);
  }
};

// Worker saga will be fired on USER_FETCH_REQUESTED actions

function* fetchUser(action) {
  try {
    const user = yield call(getdata);
    yield put(addpeople(user));
  } catch (e) {
    console.log(e);
  }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export default function* mySaga() {
  yield takeLatest("USER_INPUT", fetchUser);
}
