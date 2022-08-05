import { PostSuccessBtn } from "../atoms/PostSuccessBtn";
const PostForm = () => {
  return (
    <form>
      <label>제목</label>
      <input placeholder="title..." required />
      <label>닉네임 </label>
      <input placeholder="nickname..." required />
      <label>본문</label>
      <textarea placeholder="body..." required />
      <label>사진올리기</label>
      <input type="file" accept="image/*" />
      <PostSuccessBtn />
    </form>
  );
};
export default PostForm;
