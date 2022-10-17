import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_ALLPOSTS_FAILURE,
  LOAD_ALLPOSTS_REQUEST,
  LOAD_ALLPOSTS_SUCCESS,
} from "../reducer/postReducer";
import { dummyPost, createDummyPost } from "../util/data";

import axios from "axios";

function loginApi() {
  return axios.get("http://localhost:3030/post");
}

function* allPost(action) {
  try {
    const result = yield call(loginApi);

    yield put({
      type: LOAD_ALLPOSTS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ALLPOSTS_FAILURE,
      error: err.response.data,
    });
    throw new Error(err);
  }
}

//event listner 이벤트 연결 역할

function* watchAllPost() {
  yield takeLatest(LOAD_ALLPOSTS_REQUEST, allPost);
}

//export

export default function* postSaga() {
  yield all([fork(watchAllPost)]);
}
