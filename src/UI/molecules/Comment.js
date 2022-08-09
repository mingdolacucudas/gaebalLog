import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Comment = () => {
  const param = useParams();
  console.log(param);
  const navigate = useNavigate();

  const [comments, setComments] = useState(null);

  //get 요청  = 댓글(http://localhost:3001/comments)
  const fetchComment = async () => {
    const { data } = await axios.get("http://localhost:3001/comments");
    setComments(data);
  };

  //post 요청
  const [comment, setComment] = useState({
    nickname: "",
    comment: "",
  });
  const onSubmitHandler = (comment) => {
    axios.post("http://localhost:3001/comments", comment);
    navigate(`/detail/${param.id}`);
  };
  //delete 요청
  const onClickDeleteButtonHandler = (deleteComment) => {
    axios.delete(`http://localhost:3001/comments/${deleteComment}`);
  };

  // //edit 요청 - 미완성
  // const [targetId, setTargetId] = useState(null);
  // const [editComment, setEditComment] = useState({
  //   id: 0,
  //   comment: "",
  // });

  // const onClickEditButtonHandler = (commentId, t) => {
  //   axios.patch(`http://localhost:3001/comments/${commentId}`, t);
  // };

  //useEffect
  useEffect(() => {
    fetchComment();
  }, [comment]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(comment);
          setComment({
            id: 0,
            nickname: "",
            comment: "",
            comment_id: "",
          });
        }}
      >
        <label>닉네임</label>
        <input
          type="text"
          placeholder="닉네임"
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

        <div>
          {/* //map 에 물음표(?)는 왜들어가지??????? */}
          {comments?.map((c) => (
            <div key={c.id}>
              닉네임:{c.nickname} - 댓글내용:{c.comment}
              <button
                type="button"
                onClick={() => {
                  onClickDeleteButtonHandler(c.id);
                  // navigate("/");
                }}
              >
                댓글삭제
              </button>
            </div>
          ))}
        </div>
        {/* <input
          type="text"
          placeholder="수정하고싶은 닉네임"
          onChange={(c) => {
            setTargetId(c.target.value);
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
          onClick={() => onClickEditButtonHandler(targetId, editComment)}
        >
          댓글수정
        </button> */}
      </form>
    </div>
  );

  // //state 로 댓글 달기 연습하기
  // const [init, setInit] = useState([
  //   {
  //     id: 0,
  //     nickname: "",
  //     comment: "",
  //     comment_id: 0,
  //     isBye: false,
  //   },
  // ]);

  // const refresh = { id: 0, nickname: "", comment: "", comment_id: 0 };

  // const [comm, setComm] = useState(refresh);
  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setComm({ ...comm, [name]: value, id: init.length + 1 });
  // };

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   setInit([...init, comm]);
  //   setComm(refresh);
  //   console.log(init);
  // };

  // const onDeleteComment = (b) => {
  //   const dinit = init.filter((comm) => {
  //     return comm.id !== b;
  //   });
  //   setInit(dinit);
  // };

  //삭제요망
  // let [dbComment, setDbComment] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/comments").then((res) => {
  //     setDbComment(res.data);
  //     console.log(res.data);
  //     console.log(dbComment);
  //   });
  // }, []);

  // console.log(dbComment);

  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setDbComment({ ...dbComment, [name]: value });
  // };

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   setDbComment({
  //     id: 0,
  //     nickname: "",
  //     comment: "",
  //     comment_id: "",
  //   });
  // };
  // console.log(dbComment);

  //리턴 연습용
  // return (
  //   <form onSubmit={onSubmitHandler}>
  //     <div>
  //       <label>닉네임</label>
  //       <input
  //         type="text"
  //         placeholder="닉네임"
  //         name="nickname"
  //         value={comm.nickname}
  //         onChange={onChangeHandler}
  //       />
  //       <label>댓글내용</label>
  //       <input
  //         type="text"
  //         placeholder="댓글내용"
  //         name="comment"
  //         value={comm.comment}
  //         onChange={onChangeHandler}
  //       />
  //       <button>댓글추가</button>
  //     </div>

  //     <div>
  //       <div>
  //         {init.map((x) => {
  //           if (!init.isBye) {
  //             return (
  //               <StTempBox>
  //                 <div key={x.id}>
  //                   <div>id:{x.id}</div>
  //                   <div>nickname:{x.nickname}</div>
  //                   <div>comment:{x.comment}</div>
  //                   <div>comment_id:{param.id}</div>
  //                 </div>
  //                 <button>수정</button>
  //                 <button onClick={() => onDeleteComment(x.id)}>삭제</button>
  //               </StTempBox>
  //             );
  //           } else {
  //             return null;
  //           }
  //         })}
  //       </div>
  //     </div>
  //   </form>
  // );
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
