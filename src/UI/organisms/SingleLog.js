import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios"; //axios 임포트(서버의 데이터를 조회할 때 사용)
import { useParams } from "react-router-dom";
import EditForm from "../molecules/EditForm";
import { StBtn } from "../atoms/StBtn";

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

  // console.log(log); //data fetching이 잘 되었는지 콘솔을 통해서 확인한다

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
                  <StBtn onClick={() => onShowEditForm()}>수정</StBtn>
                  <StBtn onClick={() => onDeleteGaebalLog(log.id)}>삭제</StBtn>
                </StBtnContainer>
              </StInformation>
              <StLogBody>
                <img src={log.img} alt="" />
                <p>{log.body}</p>
                {modal === true ? (
                  <EditForm logInfo={log} setModal={setModal} />
                ) : null}
              </StLogBody>
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
  width: 80%;
  margin: 1.5rem auto;
  padding: 1rem;
  & h1 {
    font-size: 3rem;
  }
`;

const StInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 25px;
  font-size: 1.25rem;
`;
const StBtnContainer = styled.div``;
const StLogBody = styled.div`
  text-align: center;
  line-height: 200%; //행간조절 브라우저 문자 기준크기에 대한 %값
`;
