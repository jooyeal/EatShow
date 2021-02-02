import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Wrap = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 80%;
  height: 500px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 40%;
  height: 450px;
  border: 1px solid white;
  margin: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const LoginPresenter = ({
  userId,
  userPassword,
  idHandler,
  passwordHandler,
  submitHandler,
}) => {
  return (
    <Wrap>
      <Container>
        <Box>
          <SLink to="/signup">Sign Up</SLink>
        </Box>
        <Box>
          <form onSubmit={submitHandler}>
            <input type="text" value={userId} onChange={idHandler} />
            <input
              type="text"
              value={userPassword}
              onChange={passwordHandler}
            />
            <input type="submit" value="signin" />
          </form>
        </Box>
      </Container>
    </Wrap>
  );
};

export default LoginPresenter;
