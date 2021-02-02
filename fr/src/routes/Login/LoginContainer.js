import axios from "axios";
import React, { useEffect, useState } from "react";
import LoginPresenter from "./LoginPresenter";

function LoginContainer() {
  const [userId, setUserId] = useState();
  const [userPassword, setUserPassword] = useState();
  const [currentUser, setCurrentUser] = useState();

  const idHandler = (event) => {
    event.preventDefault();
    setUserId(event.target.value);
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    setUserPassword(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    let body = {
      userId: userId,
      userPassword: userPassword,
    };
    const json = await axios.post("http://localhost:8000/api/login", body);
    if (json.data.error) {
      alert("login error");
      console.log(json.data.error);
    } else {
      setCurrentUser(json.data.user[0].userId);
    }
    console.log(currentUser);
  };

  return (
    <LoginPresenter
      userId={userId}
      userPassword={userPassword}
      idHandler={idHandler}
      passwordHandler={passwordHandler}
      submitHandler={submitHandler}
    />
  );
}

export default LoginContainer;
