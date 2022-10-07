import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useInput } from "../../hooks/useInput";
import { useCallback } from "react";

/* 
경로 확인
npm i styeld-components react-router-dom
*/

const LoginMain = () => {
  //로그인이 되었다면 /Login에 접근할 수 없음
  const [email, onChangeEmail, setemail] = useInput("");
  const [password, onChangePassword, setPassword] = useInput("");

  const onLoginHandler = useCallback(
    (e) => {
      e.preventDefault(); //from 의기능믈 막음
      //e 객체의 기본 기능을 막는 기능(제출)
      console.log(email);
      console.log(password);
      email && password && console.log("로그인완료");
      //로그인로직
    },
    [email, password]
  );
  return (
    <LoginFrom>
      <h1>로그인</h1>
      <div>
        <input
          type="text"
          placeholder="이메일을 입력해주세요"
          autoComplete="off"
          required
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          autoComplete="off"
          required
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <button onClick={onLoginHandler}>로그인</button>
      <Link to="/sign">아직 회원이 아니신가요?</Link>
    </LoginFrom>
  );
};
export default LoginMain;

const LoginFrom = styled.form`
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
