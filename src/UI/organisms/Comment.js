import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../../redux/modules/comment";
import PostComment from "../molecules/PostComment";
import EditComment from "../molecules/EditComment";
import ListComment from "../molecules/ListComment";

const Comment = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.commentSlice.comments);
  const [modal, setModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);
  return (
    <CommentContainer>
      <PostComment />
      {data.map((c, i) => {
        if (parseInt(c.comment_id) == parseInt(param.id)) {
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
    </CommentContainer>
  );
};
export default Comment;

const CommentContainer = styled.div``;
