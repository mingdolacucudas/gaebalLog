import { createSlice, createAsyncThunk, isRejected } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};
//!generate pending, fulfilled , rejected action types
//! asyncthunk has two parameters . action type, callback function
const fetchPosts = createAsyncThunk("post/fetchPosts", async (thunkApi) => {
  const res = await fetch("https://git.heroku.com/gaebalgaebal.git").then(
    (data) => data.json()
  );
  console.log(res);
  return res;
});

export const addPost = createAsyncThunk("post/addPosts", async (logData) => {
  const response = await axios.post("http://localhost:3001/gaebalog", logData);
  return response.data;
});

export const deletePost = createAsyncThunk(
  "post/deletePosts",
  async (postId) => {
    const response = await axios.delete(
      `http://localhost:3001/gaebalog/${postId}`
    );
    return postId;
  }
);

export const updatePost = createAsyncThunk(
  "post/updatePosts",
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

//!투두예시----------------------------------------------
let todoList = createSlice({
  //slice만들때 선언한 slice의 name에 따라서 액션 생성자, 액션 타입, 리듀서를 자동으로 생성해줍니다. 따라서 별도로 createAction이나 createReducer를 사용하지 않아도 됩니다.

  name: "todoList", //slice이름
  initialState: [
    { id: 1, title: "공부하기", body: "리액트과제", isDone: false },
    { id: 2, title: "옷사러가기", body: "언니랑같이가기", isDone: false },
    { id: 3, title: "친구만나기", body: "저녁8시", isDone: false },
    { id: 4, title: "아오그만하고싶네", body: "새벽까지", isDone: true },
  ],
  reducers: {
    addHandler(state, action) {
      state.push(action.payload);
    },

    doneHandler(state, action) {
      let 번호 = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[번호].isDone = !state[번호].isDone;
    },
    deleteHandler(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export let { addHandler, doneHandler, deleteHandler } = todoList.actions;
export { todoList, postSlice, fetchPosts };
export const postReducer = postSlice.reducer;
