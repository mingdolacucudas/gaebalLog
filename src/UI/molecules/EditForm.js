import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { StBtn } from "../atoms/StBtn";
import { useSelector, useDispatch } from "react-redux";
import { updatePost } from "../../redux/modules/post";

function EditForm({ logInfo, setModal }) {
  console.log("logInfo라는 props가 잘 들어오는 지 확인", logInfo);
  console.log("setModal어떻게들어오는지 보자", setModal);
  const [editLog, setEditLog] = useState(logInfo); //state에 logInfo(부모로부터 받은 porops)
  console.log("editLog도 찍어보겠습니다", editLog);
  const dispatch = useDispatch();

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
          <StBtn>수정완료</StBtn>
          <StBtn
            type="button"
            onClick={() => {
              setModal(false);
            }}
          >
            취소
          </StBtn>
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
  background-color: white;
  width: 45rem;
  margin: 10% auto 0 auto;
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
