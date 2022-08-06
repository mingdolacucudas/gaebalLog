import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Comment = () => {
  let [dbComment, setDbComment] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/comments").then((res) => {
      setDbComment(res.data);
      console.log(res.data);
      console.log(dbComment);
    });
  }, []);
  console.log(dbComment);

  const { id } = useParams();

  return (
    <div>
      <div>
        <input type="text" placeholder="이름"></input>
        <input type="text" placeholder="댓글내용"></input>
        <button>댓글추가</button>
      </div>
      <TempCommit>이자리는 댓글 {dbComment.title} 나오는곳</TempCommit>
      <div>
        <StTempBox>
          <div key={dbComment.id}>
            <div>id:{dbComment.id}</div>
            <div>nickname:{dbComment.nickname}</div>
            <div>comment:{dbComment.comment}</div>
            <div>comment_id:{dbComment.comment_id}</div>
          </div>
        </StTempBox>
      </div>
    </div>
  );
};

const TempCommit = styled.div`
  height: 50px;
  overflow: scroll;
  background-color: teal;
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
export default Comment;
