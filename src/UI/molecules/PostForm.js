import { useState, useEffect } from "react";
import styled from "styled-components";
import { PostSuccessBtn } from "../atoms/PostSuccessBtn";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  //!여기부터 변수
  const initialState = {
    id: 0,
    nickname: "",
    title: "",
    body: "",
    img: "",
  };
  const [logData, setLogData] = useState(initialState);
  let navigate = useNavigate();
  const REGNICKNAME = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
  const [toggle, setToggle] = useState(false);
  //!여기부터 서버가져오기
  //todo 데이터를 가져오는데 오래걸린다. 로딩중 화면 띄우기
  let [dbData, setDbData] = useState();
  let [idNumber, setIdNumber] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:4000/gaebalog").then((res) => {
      setDbData(res.data);
      setIdNumber(res.data.length + 1);
    });
  }, [dbData]);

  //!여기부터 이벤트
  const onChange = (event) => {
    const { name, value } = event.target;
    setLogData({ ...logData, [name]: value, id: idNumber });
    if (name === "nickname" && !REGNICKNAME.test(value)) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(logData);
    axios.post("http://localhost:4000/gaebalog", logData);

    setLogData(initialState);
    alert("작성완료!");
    navigate("/");
  };

  //!여기서부터 리턴
  return (
    <Form onSubmit={onSubmit}>
      <Label>제목</Label>
      <input
        name="title"
        placeholder="title..."
        value={logData.title}
        onChange={onChange}
        required
      />
      <Label>닉네임 </Label>

      <input
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
      <textarea
        name="body"
        placeholder="body..."
        onChange={onChange}
        value={logData.body}
        required
      />
      <Label>사진올리기</Label>
      <input
        name="img"
        value={logData.img}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
      <PostSuccessBtn />
    </Form>
  );
};
export default PostForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Label = styled.label`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Error = styled.span`
  color: red;
  font-size: small;
`;
