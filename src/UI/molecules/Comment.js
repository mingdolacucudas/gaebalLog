import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useInputs from "../../hooks/useInput";
import { useSelector, useDispatch } from "react-redux";
import {
  addComment,
  fetchComments,
  deleteComment,
  updateComment,
} from "../../redux/modules/comment";

const Comment = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.commentSlice.comments;
  });
  const [{ nickname, comment }, onChange, reset, toggle] = useInputs({
    nickname: "",
    comment: "",
    comment_id: param.id,
    id: 0,
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
        />
        <label>댓글입력</label>
        <input
          type="text"
          name="comment"
          value={comment}
          placeholder="댓글입력"
          onChange={onChange}
        />
        <button>댓글 추가하기</button>
      </form>{" "}
      //!여기가 댓글보여주는곳
      <div>
        {data.map((c, i) => {
          if (c.comment_id === param.id) {
            return (
              <div key={c.id}>
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

                {selectedIndex === i && modal && (
                  <Modal
                    commentId={c.id}
                    setModal={setModal}
                    modalComment={modalComment}
                    param={param.id}
                    editComment={c}
                  />
                )}
              </div>
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
export default Comment;
