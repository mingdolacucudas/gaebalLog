import React from "react";
import styled from "styled-components";

import { useParams } from "react-router-dom";
import useInputs from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/modules/comment";
import { StBtn } from "../atoms/StBtn";
import { StInput } from "../atoms/StInput";

const PostComment = () => {
  const param = useParams();
  const search = parseInt(param.id);
  const dispatch = useDispatch();

  const [{ nickname, comment }, onChange, reset, toggle] = useInputs({
    nickname: "",
    comment: "",
  });
  const commentData = { nickname, comment, comment_id: search };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addComment(commentData));
    reset();
  };

  return (
    <StPostComnt
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <InputWrapper>
        <StInput
          type="text"
          placeholder="닉네임"
          name="nickname"
          value={nickname}
          onChange={onChange}
          required
          width="10rem"
          marginRight="10px"
        />
        <StInput
          type="text"
          name="comment"
          value={comment}
          placeholder="댓글을 입력해주세요"
          onChange={onChange}
          required
          width="30rem"
        />
      </InputWrapper>

      <StBtn backgroundColor="black" color="white">
        저장
      </StBtn>
    </StPostComnt>
  );
};
export default PostComment;

const StPostComnt = styled.form`
  display: flex;
  justify-content: space-between;

  margin: 3rem 0;
`;
const InputWrapper = styled.div``;
