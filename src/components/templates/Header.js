import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navi = useNavigate();
  return (
    <Headerbox>
      <button onClick={() => navi("/")}> 홈으로</button>

      <Logo src="/gaelogLogo.png"></Logo>

      <button onClick={() => navi(-1)}>뒤로가기</button>
    </Headerbox>
  );
};
export default Header;

const Headerbox = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Logo = styled.img`
  width: 14rem;
`;
