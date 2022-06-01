import { PrismaClient } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import styled from "styled-components";
import Header from "../../components/header";

export default function index(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { themes } = props;
  return (
    <>
      <Header />

      <main>
        <TitleContainer>
          <h2>Escola um Tema</h2>
        </TitleContainer>
        <Container>
          {themes.map((theme) => {
            return (
              <Link key={theme.id} href={`game/${theme.themeName}`}>
                <LinkContainer>
                  <p>🍀</p>
                  <a>
                    <div>{theme.themeName}</div>
                  </a>
                </LinkContainer>
              </Link>
            );
          })}
        </Container>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const themes = await prisma.theme.findMany();
  return {
    props: { themes },
  };
};

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    font-size: 50px;
  }
  margin-bottom: 50px;
`;

export const LinkContainer = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s;
  &:nth-child(odd) {
    transform: rotate(-10deg);
  }
  &:nth-child(even) {
    transform: rotate(10deg);
  }
  div {
    &::first-letter {
      text-transform: uppercase;
    }
  }
  &:hover {
    transform: rotate(10deg);
    &:nth-child(even) {
      transform: rotate(-10deg);
    }
  }
`;
export const Container = styled.div`
  max-width: 1024px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 15px;
`;
