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
<<<<<<< HEAD
  console.log(param);
  const navigate = useNavigate();

  const [comments, setComments] = useState(null);

  //get 요청  = 댓글(http://localhost:3001/comments)
  const fetchComment = async () => {
    const { data } = await axios.get("http://localhost:3001/comments");
    setComments(data);
    console.log(data);
  };

  //post 요청
  const [comment, setComment] = useState({
=======
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.commentSlice.comments;
  });
  const [{ nickname, comment }, onChange, reset, toggle] = useInputs({
>>>>>>> af127db7f329a1597f70757fb3b516944de4b0f5
    nickname: "",
    comment: "",
    comment_id: param.id,
    id: 0,
  });
<<<<<<< HEAD
  const onSubmitHandler = (comment) => {
    axios.post("http://localhost:3001/comments", comment);
    // navigate(`/detail/${param.id}`);
  };
  //delete 요청
  const onClickDeleteButtonHandler = (deleteComment) => {
    axios.delete(`http://localhost:3001/comments/${deleteComment}`);
  };

  // //edit 요청 - 미완성
  const [targetId, setTargetId] = useState({
    comment_id: param.id,
  });
  const [editComment, setEditComment] = useState({
    nickname: "",
    comment: "",
    comment_id: param.id,
    id: 0,
  });

  const onClickEditButtonHandler = (editId, t) => {
    axios.patch(`http://localhost:3001/comments/${editId}`, t);
  };

  //useEffect
  useEffect(() => {
    fetchComment();
  }, [comment]);
  console.log(param.id);

=======
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
>>>>>>> af127db7f329a1597f70757fb3b516944de4b0f5
  return (
    <div>
      <form
        onSubmit={(e) => {
<<<<<<< HEAD
          e.preventDefault();
          onSubmitHandler(comment);
          setComment();
=======
          onSubmitHandler(e);
>>>>>>> af127db7f329a1597f70757fb3b516944de4b0f5
        }}
      >
        <label>닉네임</label>
        <input
          type="text"
          placeholder="닉네임"
<<<<<<< HEAD
          onChange={(x) => {
            const { value } = x.target;
            setComment({
              ...comment,
              nickname: value,
              comment_id: param.id,
            });
          }}
=======
          name="nickname"
          value={nickname}
          onChange={onChange}
>>>>>>> af127db7f329a1597f70757fb3b516944de4b0f5
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

<<<<<<< HEAD
        <div>
          {/* //map 에 물음표(?)는 옵셔널 체이닝이다 */}
          {comments?.map((c) => {
            if (c.comment_id === param.id) {
              return (
                <div key={c.id}>
                  닉네임:{c.nickname} - 댓글내용:{c.comment} id:{c.id}{" "}
                  comment_id:
                  {c.comment_id}
                  <button
                    type="button"
                    onClick={() => {
                      onClickDeleteButtonHandler(c.id);
                      // navigate("/");
                    }}
                  >
                    댓글삭제
                  </button>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      onSubmitHandler(comment);
                    }}
                  >
                    <input
                      type="text"
                      placeholder="수정하고싶은 id"
                      onChange={(c) => {
                        setTargetId(c.target.value);
                        //수정후에도 nickname, id, comment_id 값 고정시키기
                        setEditComment({
                          ...comment,
                          comment: c.target.value,
                        });
                        console.log(c);
                      }}
                    />
                    <input
                      type="text"
                      placeholder="댓글수정"
                      onChange={(c) => {
                        setEditComment({
                          ...comment,
                          comment: c.target.value,
                        });
                      }}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        onClickEditButtonHandler(targetId, editComment)
                      }
                    >
                      댓글수정
                    </button>
                  </form>
                </div>
              );
            }
          })}
        </div>
      </form>
=======
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
>>>>>>> af127db7f329a1597f70757fb3b516944de4b0f5
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
