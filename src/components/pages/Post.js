import Main from "../templates/Main";
import PostForm from "../../UI/molecules/PostForm";
import Header from "../templates/Header";

function Post() {
  return (
    <>
      <Header />
      <Main>
        <PostForm />
      </Main>
    </>
  );
}

export default Post;
