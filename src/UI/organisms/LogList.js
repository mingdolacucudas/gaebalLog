import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../redux/modules/post";

const LogList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.postSlice.posts;
  });

  const navi = useNavigate();
  useEffect(() => {
    //getData();
    dispatch(fetchPosts());
  }, []);
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
    dispatch(fetchPosts());
    // axios.get("http://localhost:3001/gaebalog").then((res) => {
    //   setDbData(res.data);
    // });
  }, []);

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
          기록하기
        </StRecordBtn>
        <div>
          <div>
            {data.map((x) => {
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
