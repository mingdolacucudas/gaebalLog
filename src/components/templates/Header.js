import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navi = useNavigate();
  return (
    <Headerbox>
      <div>
        <button onClick={() => navi(-1)}>뒤로가기</button>

        <button onClick={() => navi("/")}> 홈으로</button>
      </div>

      <Logo src="/gaelogLogo.png" onClick={() => navi("/")}></Logo>
      <button onClick={() => navi("/post")}>글작성하기</button>
    </Headerbox>
  );
};
export default Header;

const Headerbox = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 60px;
  margin-top: 20px;
`;
const Logo = styled.img`
  width: 14rem;
`;
