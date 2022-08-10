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
    <FormBox>
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
          value={body}
          required
        />
        <Label>사진올리기</Label>
        <Input
          name="img"
          value={img}
          type="url"
          accept="image/*"
          onChange={onChange}
        />
        <StBtn hoverColor="grey" disabled={toggle ? true : false}>
          {" "}
          글작성 하기
        </StBtn>
      </Form>
    </FormBox>
  );
};
export default PostForm;

const FormBox = styled.div`
  border-color: rgb(221, 221, 221);
  border-style: solid;
  box-shadow: 0 3px 3px 0 grey;
  padding-bottom: 30px;
  margin: auto;
  width: 70%;
  height: 40rem;
  display: flex;
  border-radius: 4px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 45rem;
  margin: auto;
`;
const Label = styled.label`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 43rem;
`;
const Error = styled.span`
  color: red;
  font-size: small;
`;
const Input = styled.input`
  height: 3em;
  width: 43rem;
  border-color: rgb(221, 221, 221);
  border-radius: 4px;
  border-style: solid;
  padding: 5px;
`;
const Text = styled.textarea`
  height: 10rem;
  width: 43rem;
  border-color: rgb(221, 221, 221);
  border-radius: 4px;
  border-style: solid;
  padding: 5px;
`;
