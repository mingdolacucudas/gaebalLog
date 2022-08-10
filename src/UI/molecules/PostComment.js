import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useInputs from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/modules/comment";

const PostComment = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const [{ nickname, comment }, onChange, reset, toggle] = useInputs({
    nickname: "",
    comment: "",
  });
  const commentData = { nickname, comment, comment_id: param.id };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addComment(commentData));
    reset();
  };

  return (
    <form
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <label>닉네임</label>
      <input
        type="text"
        placeholder="닉네임"
        name="nickname"
        value={nickname}
        onChange={onChange}
        required
      />
      //!버튼 required추가
      <label>댓글입력</label>
      <input
        type="text"
        name="comment"
        value={comment}
        placeholder="댓글입력"
        onChange={onChange}
        required
      />
      <button>댓글 추가하기</button>
    </form>
  );
};
export default PostComment;
