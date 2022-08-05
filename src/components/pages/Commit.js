import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Commit = () => {
  const navi = useNavigate();

  return (
    <div>
      <h6>-Commit-</h6>
      댓글목록페이지<button onClick={() => navi("/")}> 홈으로</button>
      <div>
        <input type="text" placeholder="이름"></input>
        <input type="text" placeholder="댓글내용"></input>
        <button>댓글추가</button>
      </div>
      <TempCommit>이자리는 댓글 추가하면 나오는곳</TempCommit>
    </div>
  );
};

const TempCommit = styled.div`
  height: 50px;
  overflow: scroll;
  background-color: teal;
`;
export default Commit;
