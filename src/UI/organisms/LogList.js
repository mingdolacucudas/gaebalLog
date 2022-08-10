import React from "react";

import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <StOne>
        <StRecordBtn
          onClick={() => {
            navi("/post");
          }}
        >
          <FontAwesomeIcon icon={faKeyboard} size="2x" />
        </StRecordBtn>
        <p></p>
        <div>
          <StTempBoxOutline>
            {reverse.map((x) => {
              return (
                <StTempBox
                  key={x.id}
                  onClick={() => {
                    navi(`/detail/${x.id}`);
                  }}
                >
                  <form>
                    <StImg src={x.img} />

                    <div>{x.title}</div>
                    <StBody>{x.body}</StBody>
                  </form>
                  <StbtnStyle>내용 더보기...</StbtnStyle>
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
  height: 2000px;
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
  width: 70px;
  border: 0;
  margin: 10px;
  margin-left: 900px;
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
  white-space: normal;
  width: 1200px;
  border-radius: 5px;
  /* background-color: aliceblue; */
  gap: 5px;
`;

const StTempBox = styled.div`
  /* justify-content: center; */
  /* align-items: center; */
  padding: 12px;
  width: 330px;
  height: 300px;
  /* flex-wrap: wrap; */
  margin-top: 10px;
  overflow: auto;
  div {
    height: 50px;
  }
  background-color: #fafafa;
`;

const StImg = styled.img`
  object-fit: cover;
  width: 330px;
  height: 200px;
  border: 3px solid #fafafa;
`;

const StBody = styled.div`
  overflow: hidden;
`;

const StbtnStyle = styled.button`
  color: black;
  padding: 0.375rem 0.75rem;
  border: 1px;
  border-radius: 5px;
  cursor: pointer;
`;

export default LogList;
