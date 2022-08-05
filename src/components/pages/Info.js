import React from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navi = useNavigate();
  return (
    <div>
      <h6>-Info-</h6>

      <div>상세내용페이지</div>
      <button onClick={() => navi("/")}> 홈으로</button>
      <button
        onClick={() => {
          navi("/Commit");
        }}
      >
        댓글보기
      </button>
    </div>
  );
};

export default Info;
