import React from "react";
import styled from "styled-components";
import { FaMoon, FaRegMoon } from "react-icons/fa";

export const Header = ({ handleClick, currentTheme }) => {
  return (
    <Wrapper>
      <Logo>Where in the world?</Logo>
      <Button onClick={handleClick}>
        {currentTheme === "light" ? <FaMoon /> : <FaRegMoon />} Dark Mode
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: ${(props) => props.theme.colors.elements_bg};
  box-shadow: 0px 5px ${(props) => props.theme.colors.elements_bg};}
`;

const Logo = styled.h3`
  margin: 5px 0 0 30px;
`;

const Button = styled.button`
  border: none;
  letter-spacing: 1;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 30px;
  ${({ theme }) => `
    background: ${theme.colors.background};
    color: ${theme.colors.text_color}
  `}
`;
