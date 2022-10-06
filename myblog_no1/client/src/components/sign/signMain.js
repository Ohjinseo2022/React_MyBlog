import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useRef, useState } from "react";

const SignMain = () => {
  const userEmail = useRef(null);
  const userPw = useRef(null);
  const userName = useRef(null);
  const userPwConfirm = useRef(null); //버튼클릭시 비밀번호 체크 방법  하지만 current 방식은 리엑트에서 권장하지 않음
  const [resultPw, setResultPW] = useState(false);
  //////////////////////////////////////////////////////////////////e.target.value 방식으로 추가 코딩 !
  const [changePw, setChangePw] = useState("");
  const [changePwConfirm, setChangePwConfirm] = useState("");

  const onRegistHandler = useCallback(() => {
    console.log(userEmail.current.value);
    console.log(userPw.current.value);
    console.log(userName.current.value);
    if (userPw.current.value === userPwConfirm.current.value) {
      setResultPW(true);
      console.log("회원가입 성공");
      //회원 가입 로직
    } else {
      setResultPW(false);
      alert("비밀번호가 일치하지 않습니다. ");
      //비밀번호 초기화 다시 비밀번호 체크 이전으로 돌아감
      setChangePw("");
      setChangePwConfirm("");
      setResultPW(true);
      return;
    }
  }, []);
  //비밀번호 체크 실시간 반영
  const checkPw = useCallback(
    (e) => {
      console.log(e.target.value);
      setChangePw(e.target.value);
    },
    [setChangePw]
  );
  const checkPwConfirm = useCallback(
    (e) => {
      console.log(e.target.value);
      setChangePwConfirm(e.target.value);
      if (changePw === e.target.value) {
        setResultPW(true);
      } else {
        setResultPW(false);
      }
    },
    [changePw, setChangePwConfirm]
  );

  return (
    <>
      <SignFrom>
        <h1>회원가입</h1>
        <div>
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            autoComplete="off"
            ref={userEmail}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            autoComplete="off"
            ref={userName}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            autoComplete="off"
            ref={userPw}
            value={changePw}
            onChange={checkPw}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 한번 더 입력해주세요"
            autoComplete="off"
            ref={userPwConfirm}
            value={changePwConfirm}
            onChange={checkPwConfirm}
          />
        </div>
        {resultPw ? (
          <></>
        ) : (
          <CheckMessage>비밀번호가 일치하지 않습니다</CheckMessage>
        )}
        <button onClick={onRegistHandler}>가입하기</button>
        <Link to="/">돌아가기</Link>
      </SignFrom>
    </>
  );
};
export default SignMain;

const SignFrom = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  max-height: 18.75rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  text-align: center;

  & h1 {
    color: #4f5681;
  }

  & input {
    box-sizing: border-box;
    width: 50%;
    margin: 0.1rem 0;
    padding: 0.35rem;
    border: 1px solid #ddd;
    font-size: 0.875rem;
    color: #666;
  }

  & input::placeholder {
    font-size: 0.875rem;
    color: #ccc;
  }

  & input:focus {
    outline: none;
    border: 1px solid #7784cc;
    box-shadow: 0 0 0 0.1rem rgb(59 65 99 / 25%);
  }

  & button {
    box-sizing: border-box;
    width: 50%;
    margin: 0.2rem;
    padding: 0.3rem 0;
    border: none;
    font-size: 0.875rem;
    color: #fff;
    background: #4f5681;
    cursor: pointer;
  }

  & button:hover {
    background: #3b4163;
  }

  & a {
    display: block;
    font-size: 0.875rem;
    color: #666;
  }
`;

const CheckMessage = styled.p`
  width: 50%;
  margin: 0 auto;
  font-size: 0.875rem;
  color: red;
  text-align: left;
`;
