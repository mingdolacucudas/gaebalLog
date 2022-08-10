import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { StBtn } from "../atoms/StBtn";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../../redux/modules/post";
import useInputs from "../../hooks/useInput";

function EditForm({ logInfo, setModal }) {
  const [editLog, setEditLog] = useState(logInfo); //state에 logInfo(부모로부터 받은 porops)
  console.log("editLog도 찍어보겠습니다", editLog);
  const dispatch = useDispatch();
  const [{ nickname, title, body, img }, onChange, reset, toggle] = useInputs({
    nickname: logInfo.nickname,
    title: logInfo.title,
    body: logInfo.body,
    img: logInfo.img,
  });
  let logData = { nickname, title, body, img };
  console.log(logData);
  return (
    <StModal>
      <Form
        onSubmit={() => {
          let postId = logInfo.id;
          let logData = editLog;
          dispatch(updatePost({ postId, logData }));
        }}
      >
        <Label>제목</Label>
        <Input
          name="title"
          placeholder="title..."
          onChange={(e) => setEditLog({ ...editLog, title: e.target.value })}
          value={editLog.title}
          required
        />
        <Label>닉네임 {logInfo.nickname}</Label>
        <Label>본문</Label>
        <Text
          name="body"
          placeholder="body..."
          onChange={(e) => setEditLog({ ...editLog, body: e.target.value })}
          value={editLog.body}
          required
        />
        <Label>사진올리기</Label>
        <Input
          name="img"
          type="url"
          onChange={(e) => setEditLog({ ...editLog, img: e.target.value })}
          value={editLog.img}
        />
        <BtnContainer>
          <StBtn>완료</StBtn>
          <CancelBtn
            type="button"
            onClick={() => {
              setModal(false);
            }}
          >
            취소
          </CancelBtn>
        </BtnContainer>
      </Form>
    </StModal>
  );
}

export default EditForm;
const StModal = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: white;
  width: 50rem;
  height: 65vh;
  margin: 8% auto 0 auto;
  border: none;
  border-radius: 44px;
`;
const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 43rem;
`;
const Input = styled.input`
  height: 3em;
  width: 43rem;
`;
const Text = styled.textarea`
  height: 10rem;
  width: 43rem;
`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const CancelBtn = styled(StBtn)`
  background-color: red;
  border: 100%;
  width: 1.5rem;
  height: 1.5rem;
`;
// 뉴모피즘css
//https://neumorphism.io/#bababa
