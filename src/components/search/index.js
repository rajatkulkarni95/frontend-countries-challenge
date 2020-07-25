import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = ({ handleChange, value }) => (
  <Wrapper>
    <AiOutlineSearch
      style={{ position: "absolute", left: "60px", top: "45px" }}
    />
    <SearchStyle
      type="text"
      onChange={handleChange}
      placeholder="Search for a country.."
      value={value}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;

  input {
    padding-left: 40px;
  }
`;

const SearchStyle = styled.input`
  ${({ theme }) => `
    background: ${theme.colors.elements_bg};
    color: ${theme.colors.text_color};
    font-family: ${theme.font};
    font-weight: 600;
    `}

  padding: 15px;
  margin: 30px 0 0 50px;
  width: 400px;
  border: none;
  border-radius: 5px;
`;
