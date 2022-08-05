import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navi = useNavigate();

  return (
    <div>
      <h6>-Main-</h6>
      <Father>
        <RecordBtn
          onClick={() => {
            navi("/Record");
          }}
        >
          기록하기
        </RecordBtn>
        <TempBox
          onClick={() => {
            navi("/info");
          }}
        >
          <div>
            <div>"기록1"</div>
            <div>"제목1"</div>
            <div>"내용1"</div>
            <div>"작성자1"</div>
          </div>
        </TempBox>
      </Father>
    </div>
  );
};

const Father = styled.div`
  display: block;
  width: 1200px;
  height: 800px;
  flex-wrap: wrap;
  margin: 20px 0px 10px 30px;
  background-color: whitesmoke;
`;

const RecordBtn = styled.button`
  color: black;
  height: 50px;
  width: 100%;
  background-color: bisque;
  border: 0;
  border-radius: 15px;
  cursor: pointer;
`;

const TempBox = styled.button`
  cursor: pointer;
  padding: 12px;
  height: 200px;
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
export default Main;
