import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../redux/modules/comment";
import PostComment from "../molecules/PostComment";
import EditComment from "../molecules/EditComment";
import ListComment from "../molecules/ListComment";

const Comment = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.commentSlice.comments;
  });
  const [modal, setModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  return (
    <div>
      <PostComment />
      <div>
        {data.map((c, i) => {
          if (c.comment_id === param.id) {
            return (
              <div key={c.id}>
                <ListComment
                  c={c}
                  i={i}
                  setModal={setModal}
                  setSelectedIndex={setSelectedIndex}
                ></ListComment>

                {selectedIndex === i && modal && (
                  <EditComment
                    commentId={c.id}
                    setModal={setModal}
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
