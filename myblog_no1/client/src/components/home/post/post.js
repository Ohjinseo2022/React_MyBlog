import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import CommentForm from "./commentForm";
import Comment from "./comment";
import { useInput } from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_ALLPOSTS_REQUEST } from "../../../reducer/postReducer";

const Post = ({ allPost }) => {
  const [editPost, setEditPost] = useState(false);
  const [commentBox, setCommentBox] = useState(false);
  const [howText, onChangeHowText, setHowtext] =
    useInput("리엑트는 재밌습니다");
  const [comment, onChangecomment, setcomment] = useInput("");
  const onEditPostHandler = useCallback(() => {
    setEditPost((prev) => !prev);
  }, [editPost]);

  const onCommentBoxHandler = useCallback(() => {
    setCommentBox((prev) => !prev);
  }, [commentBox]);

  const onCommentHandler = useCallback(
    (e) => {
      console.log(e.target.value);
      setHowtext(e.target.value);
      setEditPost((prev) => !prev);
    },
    [editPost, setHowtext]
  );

  return (
    <StyledPost>
      <div className="info">
        <div className="inner">
          <StyledAvatar src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/profle-512.png" />
          <div className="name-date">
            <div className="name">{allPost.User.nickname}</div>
            <div className="date">2022.10.06</div>
          </div>
        </div>
        <div>
          <button className="editBtn" onClick={onEditPostHandler}>
            수정
          </button>
          <button className="editBtn">삭제</button>
        </div>
      </div>
      <>
        {editPost ? (
          <>
            <textarea
              cols="80"
              row="5"
              value={comment}
              onChange={onChangecomment}
            />
            <button
              className="editBtn updateBtn"
              value={comment}
              onClick={onCommentHandler}
            >
              수정하기
            </button>
          </>
        ) : (
          <div className="content">{howText}</div>
        )}
      </>
      <div className="content"></div>

      <div className="comment" onClick={onCommentBoxHandler}>
        <div className="total">댓글 1개</div>
        <div className="commentBtn">댓글 달기</div>
      </div>
      {commentBox && (
        <>
          <CommentForm />
          <Comment />
        </>
      )}
    </StyledPost>
  );
};
export default Post;

const StyledAvatar = styled.img`
  box-sizing: border-box;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: middle;
  text-align: center;
`;

const StyledPost = styled.div`
  box-sizing: border-box;
  max-width: 50rem;
  min-width: 18.75rem;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  border: 1px solid #ddd;
  padding: 1rem;

  & .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.6rem;
  }

  & .inner {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  & textarea {
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    resize: none;
    font-size: 0.875rem;
    color: #666;
  }

  & .name-date {
    display: inline-block;
    padding-left: 0.5rem;

    & .name {
      font-size: 0.875rem;
      color: #666;
    }

    & .date {
      font-size: 0.75rem;
      color: #999;
    }
  }

  & .editBtn {
    border: none;
    font-size: 0.75rem;
    color: #666;
    background: none;
    cursor: pointer;

    :hover {
      color: #000;
    }
  }

  & .updateBtn {
    width: 100%;
    text-align: right;
    padding-top: 0.7rem;
    font-weight: bold;
  }

  & .content {
    box-sizing: border-box;
    padding: 1rem 0;
    font-size: 0.875rem;
    color: #666;
  }

  & .comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ddd;
    padding-top: 0.6rem;
    cursor: pointer;
    font-size: 0.75rem;
    color: #999;
  }
`;
