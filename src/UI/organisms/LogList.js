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
      <StOne>
        <StRecordBtn
          onClick={() => {
            navi("/post");
          }}
        >
          <span>기록하기</span>
        </StRecordBtn>
        <p></p>
        <div>
          <StTempBoxOutline>
            {dbData.map((x) => {
              return (
                <StTempBox
                  key={x.id}
                  onClick={() => {
                    navi(`/detail/${x.id}`);
                  }}
                >
                  <form>
                    <div>{x.id}</div>
                    <div>{x.nickname}</div>
                    <div>{x.title}</div>
                    <div>{x.body}</div>
                    <div>{x.image}</div>
                  </form>
                  <StbtnStyle>See more...</StbtnStyle>
                </StTempBox>
              );
            })}
          </StTempBoxOutline>
        </div>
      </StOne>
    </div>
  );
};

const StOne = styled.div`
  display: block;
  box-sizing: border-box;
  width: 1200px;
  height: 800px;
  margin: 20px 0px 10px 30px;
  flex-direction: row;
  justify-content: row;
  justify-content: flex-start;
`;

const StRecordBtn = styled.button`
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  color: black;
  height: 50px;
  width: 100px;
  border: 0;
  margin: 10px;
  span {
    font-size: 20px;
    &:hover {
      font-size: 22px;
    }
    &:active {
      opacity: 10;
    }
  }
  cursor: pointer;
  justify-content: space-around;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(145deg, #439889, #ffffff);
  box-shadow: 9px 9px 18px #e0e0e0, -9px -9px 18px #ffffff; */
`;

const StTempBoxOutline = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 0 auto;
  white-space: normal;
  width: 1200px;
  height: 2000px;
  border-radius: 5px;
  background-color: aliceblue;
`;

const StTempBox = styled.div`
  /* justify-content: center; */
  /* align-items: center; */

  padding: 12px;
  width: 330px;
  height: 300px;
  margin-bottom: 12px;
  /* flex-wrap: wrap; */
  margin-top: 10px;
  overflow: scroll;
  background-color: beige;
`;

const StbtnStyle = styled.button`
  color: black;
  padding: 0.375rem 0.75rem;
  border: 1px;
  border-radius: 5px;
  cursor: pointer;
`;

export default LogList;
