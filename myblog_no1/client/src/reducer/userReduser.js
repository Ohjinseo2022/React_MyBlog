import produce from "immer";

const initialState = {
  me: null,
  isLoading: false,
  isDone: false,
  isError: null,
  logInLoading: false, //백엔드 데이터 전송유무
  logInDone: false, // 백엔드 데이터 받아왔는지
  logInError: null, // 받아온 데이터가 에러인지 아닌지
};
