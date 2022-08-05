import React from "react";
import styled from "styled-components";
import Comment from "../../UI/molecules/Comment";

import Layout from "../templates/Layout";
import Header from "../templates/Header";

// 상세페이지 - 진하
const DetailPage = () => {
  return (
    <Layout>
      <Header />
      <div>
        <h6>-Info-</h6>

        <div>상세내용페이지</div>

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
        <Comment />
      </div>
    </Layout>
  );
};

export default DetailPage;

const StArticle = styled.div`
  text-align: center;
  border: 1px solid green;
`;
