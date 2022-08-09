import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/modules/post";

const LogList = () => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const log = useSelector((state) => {
    return state.postSlice.posts;
  });
  //! 배열을 뒤집어서 최신값을 끌어올림
  //!정렬버튼도 있으면 좋겠다.
  //!로딩중 화면도 있으면 좋겠다.
  const reverse = [...log].reverse();

  useEffect(() => {
    console.log(log);
    dispatch(fetchPosts());
  }, []);

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
            {reverse.map((x) => {
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
