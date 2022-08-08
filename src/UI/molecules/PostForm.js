import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { StBtn } from "../atoms/StBtn";
import {
  fetchPosts,
  addPost,
  deletePost,
  updatePost,
} from "../../redux/modules/post";

const PostForm = () => {
  let [test, setTest] = useState("값은 어떻게 바꾸는 걸까요");
  const initialState = {
    nickname: "",
    title: "",
    body: "",
    img: "",
  };
  //!리덕스테스트
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.postSlice.posts;
  });
  //console.log(count)
  //!여기까지 테스트
  const [logData, setLogData] = useState(initialState);
  let navigate = useNavigate();
  const REGNICKNAME = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  //!여기부터 이벤트
  //!이부분을 커스텀 훅으로 만들기
  const onChange = (event) => {
    const { name, value } = event.target;
    setLogData({ ...logData, [name]: value });
    if (name === "nickname" && !REGNICKNAME.test(value)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addPost(logData));
    setLogData(initialState);
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
          value={logData.title}
          onChange={onChange}
          required
        />
        <Label>닉네임 </Label>

        <Input
          name="nickname"
          placeholder="nickname..."
          onChange={onChange}
          value={logData.nickname}
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
          value={logData.body}
          required
        />
        <Label>사진올리기</Label>
        <Input
          name="img"
          value={logData.img}
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
      <input
        value={test}
        onChange={(e) => {
          setTest(e.target.value);
          console.log();
        }}
      ></input>
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
