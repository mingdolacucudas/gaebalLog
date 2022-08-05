import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <StContainer>
      <StHeader>
        <button>홈</button>
        <h1>9조의 개발로그</h1>
        <button>뒤로가기</button>
      </StHeader>
      <StArticle>
        <h2>개발로그 | 오늘은 팀프로젝트의 시작이다!</h2>
        <p>작성자: 지나</p>
        <p>
          오늘은 팀프로젝트의 첫 시작이었다. S.A를
          쓰고....헤에이헤에이..폴더구조를 잡았다. 아토믹구조 어렵군요!!
        </p>
        <button>수정</button>
        <button>삭제</button>
      </StArticle>
      <div>여기서부터는 댓글의 영역입니다</div>
    </StContainer>
  );
}

export default Detail;

const StContainer = styled.div`
  min-width: 800px;
  max-width: 1200px;

  height: 100vh;

  margin: 0 auto;
  background-color: gray;
`;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
`;

const StArticle = styled.div`
  text-align: center;
  border: 1px solid green;
`;
