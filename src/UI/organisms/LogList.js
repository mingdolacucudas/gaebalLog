import React from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const LogList = () => {
  const navi = useNavigate();
  const param = useParams();
  // const [data, setData] = useState([]);
  // console.log(data);

  // async function getData() {
  //   try {
  //     const res = await axios.get("http://localhost:3001/gaebalog");
  //     console.log(res.data);
  //     // setDbData(res.data);
  //     //setIdNumber(res.data.length + 1);
  //   } catch (error) {
  //     alert("네트워크오류입니다");
  //   }
  // }
  // getData();

  // const callGbAxios = () => {
  //   axios({
  //     method: "get",
  //     url: "http://localhost:3001/gaebalog",
  //   }).then((response) => {
  //     setData([...response.data]);
  //     console.log(response.data);
  //   });
  //   console.log(data);
  //   // axios.get("http://localhost:3003/gaebalog").then((response) => {
  //   //   console.log(response);
  //   // });

  //   // axios.post("http://localhost:3003/gaebalog").then((response) => {
  //   //   console.log(response);
  //   // });
  // };

  // const callAxios = () => {};
  let [dbData, setDbData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/gaebalog").then((res) => {
      setDbData(res.data);
      // console.log(res.data);
      // console.log(dbData);
    });
  }, []);
  // console.log(dbData);
  // useEffect(() => {
  //   callGbAxios();
  // }, []);

  // let [swData, setSwData] = useState(false);
  // console.log(swData);
  // // 디비데이터가 undefined일때는 스위치는 false 다. 디비데이터가 undefined아닐때는 스위치를 true로 바꿔준다
  // if (dbData === undefined) {
  //   setSwData(false);
  // } else {
  //   setSwData(true);
  // }
  // {
  //   swData ? "" : "로딩중입니다";
  // }

  return (
    <div>
      <StFather>
        <StRecordBtn
          onClick={() => {
            navi("/post");
          }}
        >
          <span>기록하기</span>
        </StRecordBtn>
        <p></p>
        <div>
          <StList>
            {dbData.map((x) => {
              return (
                <StTempBox
                  key={x.id}
                  onClick={() => {
                    navi(`/detail/${x.id}`);
                  }}
                >
                  <div>{x.id}</div>
                  <div>{x.nickname}</div>
                  <div>{x.title}</div>
                  <div>{x.body}</div>
                  <div>{x.image}</div>
                  <StbtnStyle>See more...</StbtnStyle>
                </StTempBox>
              );
            })}
          </StList>
        </div>
      </StFather>
    </div>
  );
};

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:15px;
  }
`;

const StFather = styled.div`
  display: block;
  width: 1200px;
  height: 800px;
  flex-wrap: wrap;
  margin: 20px 0px 10px 30px;
  flex-direction: row;
  justify-content: row;
  justify-content: flex-start;

  font-family: "InkLipquid";
`;

const StRecordBtn = styled.button`
  display: block;
  justify-content: row;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;

  color: black;
  height: 100px;
  width: 100px;
  background-color: #439889;
  border: 0;
  border-radius: 15px;
  margin: 10px;
  span {
    font-size: 20px;
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
  cursor: pointer;
  animation: ${rotationAnimation} 3s;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #439889, #ffffff);
  box-shadow: 9px 9px 18px #e0e0e0, -9px -9px 18px #ffffff;
`;

const StList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const StTempBox = styled.div`
  flex-direction: row;
  justify-content: row;
  justify-content: center;
  align-items: center;

  border-radius: 18px;
  background: linear-gradient(145deg, #c8e6c9, #ffffff);
  box-shadow: 9px 9px 18px #e0e0e0, -9px -9px 18px #ffffff;

  padding: 12px;
  height: 300px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  width: 330px;
  margin-bottom: 12px;
  background-color: #c8e6c9;

  flex-wrap: wrap;
  margin-top: 10px;
  display: flex;

  div {
    overflow: hidden;
    height: 50px;
  }
`;

const StbtnStyle = styled.button`
  color: white;
  background: teal;
  padding: 0.375rem 0.75rem;
  border: 1px solid;
  border-radius: 0.9rem;
  font-size: 1rem;
  line-height: 1.5;
  background: linear-gradient(145deg, #439889, #ffffff);
  box-shadow: 9px 9px 18px #e0e0e0, -9px -9px 18px #ffffff;
  cursor: pointer;
  animation: ${rotationAnimation} 1s;
`;

const StMain = styled.div`
  border-radius: 18px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 9px 9px 18px #e0e0e0, -9px -9px 18px #ffffff;
  width: 50%;
  padding: 5px;
  margin-bottom: 10px;
`;

export default LogList;
