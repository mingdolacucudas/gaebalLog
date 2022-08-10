import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../redux/modules/comment";
import { StBtn } from "../atoms/StBtn";

const ListComment = ({ c, i, setModal, setSelectedIndex }) => {
  const dispatch = useDispatch();

  return (
    <ComntLine>
      <div>
        <StNickname>{c.nickname}</StNickname>
        {c.comment}
      </div>
      <StBtnWrapper>
        <StBtn
          onClick={() => {
            setSelectedIndex(i);
            setModal(true);
          }}
          color="gray"
          hoverColor="black"
        >
          수정
        </StBtn>
        <StBtn
          onClick={() => {
            dispatch(deleteComment(c.id));
          }}
          color="gray"
          hoverColor="#aa1408"
        >
          삭제
        </StBtn>
      </StBtnWrapper>
    </ComntLine>
  );
};
export default ListComment;

const ComntLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid gainsboro;
`;

const StNickname = styled.h3`
  display: inline-block;
  margin: 0 25px 0 20px;
`;
const StBtnWrapper = styled.div``;
