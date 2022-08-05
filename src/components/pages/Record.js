import React from "react";
import { useNavigate } from "react-router-dom";

const Record = () => {
  const navi = useNavigate();

  return (
    <div>
      <h6>-Record-</h6>
      <div>기록페이지</div>;
      <button
        onClick={() => {
          navi("/");
        }}
      >
        홈으로
      </button>
    </div>
  );
};

export default Record;
