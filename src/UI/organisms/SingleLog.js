import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios"; //axios 임포트(서버의 데이터를 조회할 때 사용)
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  addPost,
  deletePost,
  updatePost,
} from "../../redux/modules/post";

const SingleLog = () => {
  const param = useParams();
  const nav = useNavigate();
  //!thunk추가
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.postSlice.posts;
  });

  console.log("pram의값", param);
  const [log, setLog] = useState(null); //json server의 값을 불러오기 위해 useState선언

  // axios를 통해 get요청을 하는 함수를 생성
  // 비동기 처리를 해야하므로 asynce/await구문을 통해서 처리
  const fetchGaebalLogs = async () => {
    const { data } = await axios.get("http://localhost:3001/gaebalog");
    setLog(data); //서버로부터 fetching한 데이터를 useState의 state로 설정
  };

  // 생성한 함수를 컴포넌트가 mount됐을 때 실행하기 위해 useEffect사용
  useEffect(() => {
    //!thunk추가
    fetchGaebalLogs();
    dispatch(fetchPosts());
  }, []);

  console.log(log); //data fetching이 잘 되었는지 콘솔을 통해서 확인한다

  const onEditGaebalLog = () => {
    nav("/post");
  };

  // 삭제하기 기능 추가
  const onDeleteGaebalLog = (logID) => {
    axios.delete(`http://localhost:3001/gaebalog/${logID}`);
  };

  return (
    <StArticle>
      {data?.map((log) => {
        if (log.id === parseInt(param.id)) {
          return (
            <div key={log.id}>
              <h1>{log.title}</h1>
              <p>{log.nickname}</p>
              <img src={log.img} alt="" />
              <p>{log.body}</p>
              //!thunk추가
              <button onClick={() => onEditGaebalLog()}>수정</button>
              <button onClick={() => dispatch(deletePost(log.id))}>삭제</button>
            </div>
          );
        } else {
          return null;
        }
      })}
    </StArticle>
  );
};

export default SingleLog;

const StArticle = styled.div`
  background-color: gainsboro;
`;
