import produce from "immer";

const initialState = {
  me: null, //백엔드에서 받아온 로그인 정보가 담길 예장
  isLoading: false,
  isDone: false,
  isError: null,
  logInLoading: false, //백엔드 데이터 전송유무
  logInDone: false, // 백엔드 데이터 받아왔는지
  logInError: null, // 받아온 데이터가 에러인지 아닌지
};

export const LOGIN_IN_REQUEST = "LOGIN_IN_REQUEST";
export const LOGIN_IN_SUCCESS = "LOGIN_IN_SUCCESS";
export const LOGIN_IN_FAILURE = "LOGIN_IN_FAILURE";

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOGIN_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = action.data;
        break;
      case LOGIN_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.logInError = action.err;
        break;
      default:
        return console.log("타입명이 틀렷습니다.");
    }
  });

export default reducer;
