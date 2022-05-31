import { PrismaClient } from "@prisma/client";
import axios from "axios";
import { useState } from "react";

function CreateUser(themeId) {
  const [user, setUser] = useState({});

  const addUserObject = (e) => {
    setUser(e.target.value);
  };
  const userCreate = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:3000/api/createword", {
      word: user,
      ...themeId,
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

export default CreateUser;
