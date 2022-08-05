import { useNavigate } from "react-router-dom";

const Header = () => {
  const navi = useNavigate();
  return (
    <header>
      <button onClick={() => navi("/")}> 홈으로</button>
      <h1>개발로그9조쓰</h1>
      <button onClick={() => navi(-1)}>뒤로가기</button>
    </header>
  );
};
export default Header;
