import CreateUser from "../components/createuser";
import Logo from "../components/logo";
export default function Home(props) {
  return (
    <main>
      <Container>
        <div>
          <Logo />
        </div>
        <div>
          <h2>Entre ou crie um usuário</h2>
          <CreateUser />
        </div>
      </Container>
    </main>
  );
}

import styled from "styled-components";

export const Container = styled.div`
  max-width: 960px
  margin : auto;
  display : flex;
  height : 100vh;
  justify-content : center;
  align-items : center;  
`;
