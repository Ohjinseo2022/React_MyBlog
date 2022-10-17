import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LOAD_ALLPOSTS_REQUEST } from "../../reducer/postReducer";

import Post from "./post/post";
import PostForm from "./post/postForm";

const HomeMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_ALLPOSTS_REQUEST,
    });
  }, [dispatch]);
  const { allPost } = useSelector((state) => state.postReducer);
  console.log("게시글 조회", allPost);

  return (
    <StyledWrap>
      <PostForm />
      <Post />
      {allPost.length > 0 && allPost.map((v) => <Post key={v.id} post={v} />)}
    </StyledWrap>
  );
};
export default HomeMain;

const StyledWrap = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  min-width: 18.75rem;
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;
