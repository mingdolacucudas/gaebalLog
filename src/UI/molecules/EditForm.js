import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function EditForm({ logID }) {
  console.log("logID가 props로 넘어오고 있나?", logID);
  const [editLog, setEditLog] = useState({ body: "" }); //수정값이 들어갈 state선언
  console.log(editLog);
  const onEditComplete = (logID, editLog) => {
    axios.patch(`http://localhost:3001/gaebalog/${logID}`, editLog);
  };
  return (
    <StEditBox onSubmit={() => onEditComplete(logID, editLog)}>
      <input
        type=""
        placeholder="수정할 내용"
        onChange={(e) => setEditLog({ ...editLog, body: e.target.value })}
      />
      <button>수정완료</button>
    </StEditBox>
  );
}

export default EditForm;

const StEditBox = styled.form`
  background-color: skyblue;
  border: 1px solid blue;
`;
