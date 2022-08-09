import { useState, useEffect } from "react";
import styled from "styled-components";
import useInputs from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StBtn } from "../atoms/StBtn";
import { addPost, deletePost, updatePost } from "../../redux/modules/post";

const PostForm = () => {
  const [{ nickname, title, body, img }, onChange, reset, toggle] = useInputs({
    nickname: "",
    title: "",
    body: "",
    img: "",
  });
  let logData = { nickname, title, body, img };
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addPost(logData));
    alert("작성완료!");
    navigate("/");
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Label>제목</Label>
        <Input
          name="title"
          placeholder="title..."
          // value={logData.title}
          value={title}
          onChange={onChange}
          required
        />
        <Label>닉네임 </Label>

        <Input
          name="nickname"
          placeholder="nickname..."
          onChange={onChange}
          // value={logData.nickname}
          value={nickname}
          required
        />
        {toggle ? (
          <Error>
            닉네임은 2자 이상 16자 이하, 영어 또는 숫자 또는 한글만 가능합니다
          </Error>
        ) : (
          <span></span>
        )}

        <Label>본문</Label>
        <Text
          name="body"
          placeholder="body..."
          onChange={onChange}
          // value={logData.body}
          value={body}
          required
        />
        <Label>사진올리기</Label>
        <Input
          name="img"
          // value={logData.img}
          value={img}
          type="url"
          accept="image/*"
          onChange={onChange}
        />
        <StBtn>작성완료</StBtn>
      </Form>

      <button
        onClick={() => {
          let postId = 6;
          dispatch(deletePost(postId));
        }}
      >
        삭제버튼
      </button>
      <button
        onClick={() => {
          let postId = 4;
          dispatch(updatePost({ postId, logData }));
        }}
      >
        수정버튼
      </button>
    </>
  );
};
export default PostForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 45rem;
  margin: auto;
`;
const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 43rem;
`;
const Error = styled.span`
  color: red;
  font-size: small;
`;
const Input = styled.input`
  height: 3em;
  width: 43rem;
`;
const Text = styled.textarea`
  height: 10rem;
  width: 43rem;
`;
