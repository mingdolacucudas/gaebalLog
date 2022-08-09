import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../redux/modules/comment";

const ListComment = ({ c, i, setModal, setSelectedIndex }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        닉네임:{c.nickname} - 댓글내용:{c.comment}
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteComment(c.id));
        }}
      >
        댓글삭제
      </button>
      <button
        onClick={() => {
          setSelectedIndex(i);
          setModal(true);
        }}
      >
        수정하기
      </button>
    </div>
  );
};
export default ListComment;
