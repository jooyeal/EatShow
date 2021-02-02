import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.5);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Item = styled.li`
  list-style: none;
  width: 130px;
  text-align: center;
  margin-left: 20px;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;
const Home = styled.li`
  list-style: none;
  width: 130px;
  text-align: center;
  margin-left: 20px;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

export default () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Header>
      <Home>
        <SLink to="/">Home</SLink>
      </Home>
      <List>
        <Item>
          {isLogin ? (
            <SLink to="/">logout</SLink>
          ) : (
            <SLink to="/login">login</SLink>
          )}
        </Item>
        <Item>
          <SLink to="/booking">check booking</SLink>
        </Item>
        <Item>
          <SLink to="/wishlist">check wishlist</SLink>
        </Item>
      </List>
    </Header>
  );
};
