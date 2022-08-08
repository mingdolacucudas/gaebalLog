import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
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
  const [comment, setComment] = useState({
    nickname: "",
    comment: "",
    comment_id: param.id,
  });
  const [modal, setModal] = useState(false);
  //!추가하기
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addComment(comment));
    e.target[0].value = "";
    e.target[1].value = "";
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
          onChange={(x) => {
            const { value } = x.target;
            setComment({
              ...comment,
              nickname: value,
            });
          }}
        />
        <label>댓글입력</label>
        <input
          type="text"
          name="comment"
          placeholder="댓글입력"
          onChange={(x) => {
            const { value } = x.target;
            setComment({
              ...comment,
              comment: value,
            });
          }}
        />
        <button>댓글 추가하기</button>
      </form>{" "}
      //!여기가 댓글보여주는곳
      <div>
        {data.map((c, i) => {
          if (c.comment_id === param.id) {
            return (
              <div key={c.id}>
                닉네임:{c.nickname} - 댓글내용:{c.comment}
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
                    setModal(true);
                  }}
                >
                  수정하기
                </button>
                {modal ? (
                  <Modal
                    c={c}
                    setComment={setComment}
                    comment={comment}
                    setModal={setModal}
                  />
                ) : null}
              </div>
            );
          }
        })}
      </div>
      //!여기부터 수정화면
    </div>
  );
};

const Modal = ({ c, comment, setComment, setModal }) => {
  const dispatch = useDispatch();
  const updatehandler = (e) => {
    e.preventDefault();
    dispatch(updateComment(comment));
    e.target[0].value = "";
    e.target[1].value = "";
  };
  return (
    <form onSubmit={(e) => updatehandler}>
      <label>닉네임</label>
      <input
        type="text"
        placeholder="닉네임"
        name="nickname"
        value={c.nickname}
        onChange={(x) => {
          const { value } = x.target;
          setComment({
            ...comment,
            nickname: value,
          });
        }}
      />
      <label>댓글입력</label>
      <input
        type="text"
        name="comment"
        placeholder="댓글입력"
        value={c.comment}
        onChange={(x) => {
          const { value } = x.target;
          setComment({
            ...comment,
            comment: value,
          });
        }}
      />
      <button
        onClick={() => {
          setModal(false);
        }}
      >
        수정완료
      </button>
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
