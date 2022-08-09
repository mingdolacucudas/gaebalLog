import { createSlice, createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};
//!generate pending, fulfilled , rejected action types
//! asyncthunk has two parameters . action type, callback function
const fetchPosts = createAsyncThunk("post/fetchPost", async (thunkApi) => {
  const res = await fetch("http://localhost:3001/gaebalog").then((data) =>
    data.json()
  );
  console.log(res);
  return res;
});

export const addPost = createAsyncThunk("post/addPost", async (logData) => {
  const response = await axios.post("http://localhost:3001/gaebalog", logData);
  return response.data;
});

export const deletePost = createAsyncThunk(
  "delete/deletePost",
  async (postId) => {
    const response = await axios.delete(
      `http://localhost:3001/gaebalog/${postId}`
    );
    return postId;
  }
);

export const updatePost = createAsyncThunk(
  "put/updatePost",
  async ({ logData, postId }) => {
    const response = await axios.put(
      `http://localhost:3001/gaebalog/${postId}`,
      logData
    );
    console.log(postId);
    console.log(logData);
    return { postId, logData };
  }
);

//!builder is cases of each lifecycle methods
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;

      state.posts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [...state.posts, action.payload];
      state.error = "";
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.filter((post) => post.id != action.payload);
      state.error = "";
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = state.posts.map((post) => {
        if (post.id === action.payload.postId) {
          return action.payload.logData;
        } else {
          return post;
        }
      });
      state.error = "";
    });
  },
});

export { postSlice, fetchPosts };
export const postReducer = postSlice.reducer;
