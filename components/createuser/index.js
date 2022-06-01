import axios from "axios";
import { useState, useEffect } from "react";
import Form from "../Form";
import { useRouter } from "next/router";
function CreateUser() {
  const [user, setUser] = useState({});
  const router = useRouter();
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    const ifuser = localStorage.getItem("userdata");
    if (ifuser) {
      setUserExists(true);
      router.push("/game");
    }
  }, [router]);

  const addUserObject = (e) => {
    setUser({ [e.target.name]: e.target.value });
  };

  const userCreate = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:3000/api/createuser", user)
      .then((response) => {
        const { data } = response;
        localStorage.setItem("userdata", JSON.stringify(data));
        router.push("/");
      })
      .catch((err) => {
        localStorage.setItem(
          "userdata",
          JSON.stringify(err.response.data.userdata)
        );
        router.push("/game");
      });
  };

  return <Form method={userCreate} formName="userName" event={addUserObject} />;
}

export default CreateUser;
