import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_IN_FAILURE,
  LOGIN_IN_REQUEST,
  LOGIN_IN_SUCCESS,
} from "../reducer/userReducer";
import { dummyUser } from "../util/data";

//saga func
function* logIn(action) {
  //시도
  try {
    // const response = yield all axios.post("백엔드 주소./api/login",action.data)
    yield delay(500); //백엔드와 통신하는 척하기 !
    yield put({
      type: LOGIN_IN_SUCCESS,
      data: dummyUser(action.data), //원래 response
    });
  } catch (err) {
    //시도가 실패햇을떄
    yield put({
      type: LOGIN_IN_FAILURE,
      error: err.response.data,
    });
  }
}

//event Listner 이벤트 연결역할

function* watchLogIn() {
  yield takeLatest(LOGIN_IN_REQUEST, logIn);
}

//exprot

export default function* userSaga() {
  yield all([fork(watchLogIn)]);
}
