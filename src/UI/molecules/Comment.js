import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useInputs from "../../hooks/useInput";
import {
  addComment,
  fetchComments,
  deleteComment,
  updateComment,
} from "../../redux/modules/comment";
import { StBtn } from "../atoms/StBtn";

const Comment = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.commentSlice.comments);
  const [{ nickname, comment }, onChange, reset, toggle] = useInputs({
    nickname: "",
    comment: "",
  });
  const commentData = { nickname, comment, comment_id: param.id };

  const [modal, setModal] = useState(false);
  const [modalComment, setModalComment] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addComment(commentData));
    reset();
  };

  //!get요청
  //useEffect
  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="닉네임"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
        <input
          type="text"
          name="comment"
          value={comment}
          placeholder="댓글을 입력해주세요"
          onChange={onChange}
        />
        <StBtn>저장</StBtn>
      </form>
      <div>
        {data.map((c, i) => {
          if (c.comment_id === param.id) {
            return (
              <StComntLine key={c.id}>
                <h3>{c.nickname}</h3>
                <p>{c.comment}</p>
                <StBtnContainer>
                  <StBtn
                    type="button"
                    onClick={() => {
                      dispatch(deleteComment(c.id));
                    }}
                  >
                    삭제
                  </StBtn>
                  <StBtn
                    onClick={() => {
                      setSelectedIndex(i);
                      setModal(true);
                    }}
                  >
                    수정
                  </StBtn>
                </StBtnContainer>
                {selectedIndex === i && modal && (
                  <Modal
                    commentId={c.id}
                    setModal={setModal}
                    modalComment={modalComment}
                    param={param.id}
                    editComment={c}
                  />
                )}
              </StComntLine>
            );
          }
        })}
      </div>
    </div>
  );
};

const Modal = ({ setModal, param, commentId, editComment }) => {
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
export default Comment;
const StComntLine = styled.div`
  & h3,
  p {
  }
`;
const StBtnContainer = styled.div`
  display: inline-block;
`;

const TempCommit = styled.div`
  height: 50px;
  overflow: scroll;
  background-color: teal;
`;

const StTempBox = styled.div`
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
