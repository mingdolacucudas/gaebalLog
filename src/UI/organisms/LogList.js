import React from "react";
import styled from "styled-components";
import { useState } from "react";
// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LogList = () => {
  const navi = useNavigate();
  const [data, useData] = useState([
    {
      id: 0,
      nickname: "ming",
      title: "오늘의 TIL",
      body: "진짜진짲닞다아어ㅏㅓ너무 어렵다.",
      img: "이미지...",
    },
    {
      id: 1,
      nickname: "ho",
      title: "우리팀이 짱이야",
      body: "우리는 벌써 다만들었는걸..?",
      img: "이미지...",
    },
    {
      id: 3,
      nickname: "jin",
      title: "리액트 너무 재밌어!",
      body: "짜릿해!!",
      img: "이미지...",
    },
    {
      id: 4,
      nickname: "하이루",
      title: "제목",
      body: "잘들어갈까요>?",
      img: "C:\\fakepath\\KakaoTalk_Photo_2022-08-04-10-49-11.png",
    },
    {
      id: 5,
      nickname: "안녕하세요",
      title: "오늘 공부뭐하지",
      body: "ㅇㅇㄹㅇㄹ\nㅇㄹㅇㄹㅇㄹ\nㅇㄹㅇㄹ",
      img: "C:\\fakepath\\KakaoTalk_Photo_2022-08-04-10-49-36.png",
    },
  ]);
  console.log(data);

  // const callAxios = () => {};

  // useEffect(() => {}, []);

  return (
    <div>
      <StFather>
        <StRecordBtn
          onClick={() => {
            navi("/post");
          }}
        >
          기록하기
        </StRecordBtn>
        <div>
          <div>
            {data.map((x) => {
              return (
                <StTempBox
                  key={x.id}
                  data={data}
                  onClick={() => {
                    navi(`/detail/${x.id}`);
                  }}
                >
                  <div>{x.id}</div>
                  <div>{x.nickname}</div>
                  <div>{x.title}</div>
                  <div>{x.body}</div>
                  <div>{x.image}</div>
                </StTempBox>
              );
            })}
          </div>
        </div>
      </StFather>
    </div>
  );
};

const StFather = styled.div`
  display: block;
  width: 1200px;
  height: 800px;
  flex-wrap: wrap;
  margin: 20px 0px 10px 30px;
  background-color: whitesmoke;
`;

const StRecordBtn = styled.button`
  color: black;
  height: 50px;
  width: 100%;
  background-color: bisque;
  border: 0;
  border-radius: 15px;
  cursor: pointer;
`;

const StTempBox = styled.button`
  cursor: pointer;
  padding: 12px;
  height: 100px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
  background-color: thistle;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;
export default LogList;
