import React from "react";
import styled from "styled-components";

import useInputs from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { updateComment } from "../../redux/modules/comment";

const EditComment = ({ setModal, param, commentId, editComment }) => {
  const dispatch = useDispatch();
  const [{ nickname, comment }, onChange, reset, toggle] = useInputs({
    nickname: editComment.nickname,
    comment: editComment.comment,
  });
  const commentData = { nickname, comment, comment_id: param };
  const updatehandler = (e) => {
    e.preventDefault();
    dispatch(updateComment({ commentId, commentData }));
    setModal(false);
  };
  return (
    <form onSubmit={(e) => updatehandler(e)}>
      <label>닉네임</label>
      <input
        type="text"
        value={nickname}
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
      />
      <label>댓글입력</label>
      <input
        type="text"
        value={comment}
        name="comment"
        placeholder="댓글입력"
        onChange={onChange}
      />
      <button>수정완료</button>
      <button
        onClick={() => {
          setModal(false);
        }}
      >
        취소하기
      </button>
    </form>
  );
};
export default EditComment;
