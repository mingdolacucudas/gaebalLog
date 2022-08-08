import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios"; //axios 임포트(서버의 데이터를 조회할 때 사용)
import { useParams } from "react-router-dom";
import EditForm from "../molecules/EditForm";

const SingleLog = () => {
  const param = useParams();
  console.log("pram의값", param);

  const nav = useNavigate();

  const [log, setLog] = useState(null); //json server의 값을 불러오기 위해 useState선언

  // axios를 통해 get요청을 하는 함수를 생성
  // 비동기 처리를 해야하므로 asynce/await구문을 통해서 처리
  const fetchGaebalLogs = async () => {
    const { data } = await axios.get("http://localhost:3001/gaebalog");
    setLog(data); //서버로부터 fetching한 데이터를 useState의 state로 설정
  };

  // 생성한 함수를 컴포넌트가 mount됐을 때 실행하기 위해 useEffect사용
  useEffect(() => {
    fetchGaebalLogs();
  }, []);

  console.log(log); //data fetching이 잘 되었는지 콘솔을 통해서 확인한다

  // 삭제하기(삭제 후 메인으로 돌아가는 로직을 추가>0806)
  const onDeleteGaebalLog = (logID) => {
    axios.delete(`http://localhost:3001/gaebalog/${logID}`).then(nav("/"));
  };
  const [modal, setModal] = useState(false);
  const onShowEditForm = () => {
    setModal(!modal);
  };

  return (
    <StArticle>
      {log?.map((log) => {
        if (log.id === parseInt(param.id)) {
          return (
            <div key={log.id}>
              <h1>{log.title}</h1>
              <StInformation>
                <p>
                  {log.nickname}, id체크: {log.id}
                </p>
                <StBtnContainer>
                  <button onClick={() => onShowEditForm()}>수정</button>
                  <button onClick={() => onDeleteGaebalLog(log.id)}>
                    삭제
                  </button>
                </StBtnContainer>
              </StInformation>
              <img src={log.img} alt="" />
              <p>{log.body}</p>
              {modal === true ? (
                <EditForm logInfo={log} setModal={setModal} />
              ) : null}
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

const StInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StBtnContainer = styled.div``;
