import React from "react";
import styled from "styled-components";


export const Search = ({ handleChange, value }) => (
  <SearchStyle
    type="text"
    onChange={handleChange}
    placeholder="Search for a country.."
    value={value}
  />
);

const SearchStyle = styled.input`
  ${({ theme }) => `
    background: ${theme.colors.elements_bg};
    color: ${theme.colors.text_color};
    font-family: ${theme.font};
    font-weight: 600;
    `}
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  padding: 15px;
  margin: 30px 0 0 50px;
  width: 30%;
  border: none;
  border-radius: 5px;

  @media (max-width: 440px) {
    width: 90vw;
    display: block;
    margin: 10px auto;
  }
`;
