import { Router, useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import CreateUser from "../../components/createuser";
import { useState, useEffect } from "react";
// import { Container } from './styles';
let themeName = "";

export default function Game(props, duration = 120000) {
  const [gameWord, setGameWord] = useState([]);
  const { themeName, words } = props.words;
  const [changes, setChanges] = useState(6);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const startGame = () => {
    const suffle = words;
    const word = suffle[Math.floor(Math.random() * suffle.length)];
    const wordUpper = word.word.toUpperCase();
    setCorrectGuesses([]);
    setChanges(6);
    setGameWord([...wordUpper]);
  };
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const letterPress = (alphabet) => {
    if (gameWord.includes(alphabet)) {
      setCorrectGuesses([...correctGuesses, alphabet]);
    }
    if (!gameWord.includes(alphabet)) {
      setChanges(changes - 1);
    }
  };

  useEffect(() => {
    setChanges(6);
  }, []);

  const maskedWord = gameWord
    .map((letter) => {
      return correctGuesses.includes(letter) ? letter : " _ ";
    })
    .join("");
  return (
    <Container>
      {gameWord.length <= 0 ? (
        <div>
          <button onClick={startGame}>start game</button>
        </div>
      ) : (
        <>
          <HangContainer>
            <div className="man">
              {changes <= 5 && <div className="head" />}
              {changes <= 4 && <div className="body" />}
              {changes <= 3 && <div className="l-arm" />}
              {changes <= 2 && <div className="r-arm" />}
              {changes <= 1 && <div className="l-leg" />}
              {changes <= 0 && <div className="r-leg" />}
            </div>
            <div className="keyboard">
              {alphabets.map((alphabet, index) => (
                <ButtonContainer
                  color={correctGuesses.includes(alphabet) && "yellow"}
                  disabled={
                    (changes === 0 && true) ||
                    (!maskedWord.includes("_") && true)
                  }
                  key={index}
                  onClick={() => letterPress(alphabet)}
                >
                  {alphabet}
                </ButtonContainer>
              ))}
            </div>
          </HangContainer>
          <p className="masked">{changes === 0 ? gameWord : maskedWord}</p>
          {changes === 0 && <p>You lost!</p>}
          {!maskedWord.includes("_") && <p>You won!</p>}
        </>
      )}
    </Container>
  );

  // const router = useRouter();
  // const { slug } = router.query;
  // themeName = slug;
  // return <div>{slug}</div>;
}

export const getServerSideProps = async (CTX) => {
  const prisma = new PrismaClient();
  const themeName = CTX.params.slug;

  const words = await prisma.theme.findFirst({
    where: {
      themeName: themeName,
    },
    include: {
      words: true,
    },
  });
  return {
    props: { words, themeName },
  };
};

import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: 3px solid #000;
  margin: 5px;

  text-align: center;
  width: 30px;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => (!props.color ? "transparent" : props.color)};
`;

export const HangContainer = styled.div`
  width: 600px;
  height: 400px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("/images/hangman.png");
  background-size: cover;
  background-position: bottom;
  position: relative;
  .man {
    position: relative;
    width: 50px;
    top: 45px;
    left: 166px;
    height: 200px;

    .head {
      width: 50px;
      height: 50px;
      border: 3px solid #000;
      border-radius: 50%;
    }
    .body {
      width: 3px;
      height: 100px;
      margin: auto;
      background-color: #000;
    }
    .l-arm {
      width: 3px;
      height: 50px;
      transform: rotate(45deg);
      background-color: #000;
      position: relative;
      top: -85px;
      left: 5px;
    }
    .r-arm {
      width: 3px;
      height: 50px;
      transform: rotate(-45deg);
      background-color: #000;
      position: relative;
      top: -135px;
      left: 41px;
    }
    .l-leg {
      width: 3px;
      height: 50px;
      transform: rotate(45deg);
      background-color: #000;
      position: relative;
      top: -109px;
      left: 5px;
    }
    .r-leg {
      width: 3px;
      height: 50px;
      transform: rotate(-45deg);
      background-color: #000;
      position: relative;
      top: -159px;
      left: 41px;
    }
  }
  .keyboard {
    width: 250px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: relative;
    z-index: 9999999;
  }
`;
export const Container = styled.div`
  width: 900px;
  margin: auto;
  .masked {
    text-align: center;
    letter-spacing: 20px;
    font-size: 20px;
  }
`;
export const LetterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
