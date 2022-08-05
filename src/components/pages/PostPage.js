import PostForm from "../../UI/molecules/PostForm";
import Layout from "../templates/Layout";
import Header from "../templates/Header";

function PostPage() {
  return (
    // 기록하기 페이지 - 민지님
    <Layout>
      <Header />
      <PostForm />
    </Layout>
  );
}

export default PostPage;
