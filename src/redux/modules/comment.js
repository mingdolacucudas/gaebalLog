import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  comments: [],
  error: "",
};

const fetchComments = createAsyncThunk(
  "post/fetchComments",
  async (thunkApi) => {
    const res = await fetch("http://localhost:3001/comments").then((data) =>
      data.json()
    );
    return res;
  }
);

export const addComment = createAsyncThunk(
  "post/addComment",
  async (logData) => {
    const response = await axios.post(
      "http://localhost:3001/comments",
      logData
    );
    return response.data;
  }
);

export const deleteComment = createAsyncThunk(
  "delete/deleteComment",
  async (commentId) => {
    const response = await axios.delete(
      `http://localhost:3001/comments/${commentId}`
    );
    return commentId;
  }
);

export const updateComment = createAsyncThunk(
  "put/updateComment",
  async ({ commentData, commentId }) => {
    const response = await axios.put(
      `http://localhost:3001/comments/${commentId}`,
      commentData
    );
    console.log(commentId);
    console.log(commentData);
    return { commentId, commentData };
  }
);

//!builder is cases of each lifecycle methods
export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
      state.error = "";
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = [...state.comments, action.payload];
      state.error = "";
    });
    builder.addCase(deleteComment.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id != action.payload
      );
      state.error = "";
    });
    builder.addCase(updateComment.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = state.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return action.payload.commentData;
        } else {
          return comment;
        }
      });
      state.error = "";
    });
  },
});

export { fetchComments };
