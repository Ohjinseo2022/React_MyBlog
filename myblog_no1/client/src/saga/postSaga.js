import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_ALLPOSTS_FAILURE,
  LOAD_ALLPOSTS_REQUEST,
  LOAD_ALLPOSTS_SUCCESS,
} from "../reducer/postReducer";
import { dummyPost, createDummyPost } from "../util/data";

function* allPost(action) {
  try {
    yield delay(500); //백엔드 통신하는 척
    yield put({
      type: LOAD_ALLPOSTS_SUCCESS,
      data: dummyPost(action.data),
    });
  } catch (err) {
    yield put({
      type: LOAD_ALLPOSTS_FAILURE,
      error: err.response.data,
    });
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
