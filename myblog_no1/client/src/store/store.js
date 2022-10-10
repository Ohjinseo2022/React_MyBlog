import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducer/_index";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../saga/_index";

const logger = createLogger();
//리덕스의 실행 콘솔을 찍어주는 미들웨를 사용하고 변수에 담아준것
const sagaMiddleware = createSagaMiddleware();
//리덕스 사가를 실행하기 위해 변수를 담아준것

//store 를 리컨으로 받기위한 함수
const createConfigure = () => {
  const store = createStore(
    rootReducer,
    //개발환경일 때는 데브툴즈를 포함, 로거도 포함
    //개발환경이 아닐 때는 사가만 포함
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
      : applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  //사가를 실행하는 함수 createStore를 실행할 경우 적용하기 위해 함수안에 삽입
  return store;
  //설정 값을 리턴하는 함수
};

export default createConfigure;
