import styled from "styled-components";

const Comment = (Comment) => {
  return (
    <StyledComment>
      <div className="inner">
        <div className="username">오진서</div>
        <div className="text">안녕</div>
        <div className="date">2022-10-07</div>
        <div className="replyBtn">💬</div>
        <div className="removeBtn">❌</div>
      </div>
    </StyledComment>
  );
};
export default Comment;

const StyledComment = styled.div`
  box-sizing: border-box;

  & .inner {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: #666;
    width: 100%;
    padding: 0.2rem 0;

    .username {
      width: 15%;
    }

    .text {
      box-sizing: border-box;
      padding: 0 0.2rem;
      width: 65%;
    }

    .date {
      box-sizing: border-box;
      padding: 0 0.2rem;
      width: 12%;
      color: #999;
    }

    .replyBtn,
    .removeBtn {
      box-sizing: border-box;
      padding-left: 0.2rem;
      width: 5%;
      cursor: pointer;
      text-align: right;
    }
  }
`;
