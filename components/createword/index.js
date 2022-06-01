import { useState } from "react";

import axios from "axios";

// import { Container } from './styles';

function createWord() {
  const [user, setUser] = useState({});

  const addUserObject = (e) => {
    setUser({ [e.target.name]: e.target.value });
  };

  const userCreate = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/api/createword", user, {
      headers: {
        userid: "62929eef63e0094fd5fb49f7",
      },
    });
  };
  return (
    <div>
      <form onSubmit={userCreate}>
        <input name="word" onChange={addUserObject} />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}

export default createWord;
