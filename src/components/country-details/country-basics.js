import React from "react";
import styled from "styled-components";

export const CountryBasicDetail = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
}) => (
  <Wrapper>
    <h1>{name}</h1>
    <p>
      <span>Native Name: </span>
      {nativeName}
    </p>
    <p>
      <span>Population: </span>
      {population}
    </p>
    <p>
      <span>Region: </span>
      {region}
    </p>
    <p>
      <span>Sub Region: </span>
      {subregion}
    </p>
    <p>
      <span>Capital: </span>
      {capital}
    </p>
  </Wrapper>
);

const Wrapper = styled.div`
  h1 {
    margin: 30px 0 30px 0;
  }
`;
