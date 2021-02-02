import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Wrap = styled.body`
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

const LoginPresenter = () => {
  return (
    <Wrap>
      <Container>
        <Box>
          <SLink to="/signup">Sign Up</SLink>
        </Box>
        <Box>
          <form onSubmit>
            <input type="text" />
            <input type="text" />
            <input type="submit" value="signin" />
          </form>
        </Box>
      </Container>
    </Wrap>
  );
};

export default LoginPresenter;
