import React from "react";
import Logo from "./logo";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <div />
      <div>
        <Logo />
      </div>
      <div>score 0</div>
    </HeaderContainer>
  );
}

export default Header;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 0 15px;
  img {
    width: 100%;
    height: 90px;
  }
`;
