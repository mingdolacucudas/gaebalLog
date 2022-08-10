import styled from "styled-components";

export const StBtn = styled.button`
  width: 5rem;
  height: 30px;

  cursor: pointer;

  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.color || "black"};
  border: none;
`;
