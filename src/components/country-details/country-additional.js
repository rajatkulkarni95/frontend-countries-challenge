import React from "react";
import styled from "styled-components";

export const CountryAdditionalDetails = ({
  topLevelDomain,
  currencies,
  languages,
}) => (
  <Wrapper>
    <p>
      <span>Top Level Domain: </span>
      {topLevelDomain.join()}
    </p>
    <p>
      <span>Currencies: </span>
      {currencies[0].name}
    </p>
    <p>
      <span>Languages: </span>
      {languages.map((lang) => `${lang.name}, `)}
    </p>
  </Wrapper>
);

const Wrapper = styled.div`
  grid-area: right;
`;
