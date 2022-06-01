import React, { useEffect, useState } from "react";
import Logo from "./logo";
import styled from "styled-components";

export default function Header() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const userdata = localStorage.getItem("userdata");
    setUserData(JSON.parse(userdata));
  }, []);
  console.log(userData);
  return (
    <HeaderContainer>
      <div>{!userData ? "" : userData.userName}</div>
      <div>
        <Logo />
      </div>
      <div>score 0</div>
    </HeaderContainer>
  );
}

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
