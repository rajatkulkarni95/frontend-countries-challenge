import React from "react";
import styled from "styled-components";

export const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <Wrapper>
      <Image src={flag} />
      <Text>
        <h5>{name}</h5>
        <p>
          <span>Population:</span> {population}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
        <p>
          <span>Capital:</span> {capital}
        </p>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 230px;
  height: 300px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.elements_bg};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
`;

const Image = styled.img`
  height: 150px;
  width: auto;
  overflow: hidden;
`;

const Text = styled.div`
  h5 {
    font-size: 16px;
    margin: 20px 0 0 20px;
    font-weight: 800;
  }

  p {
    margin-left: 20px;
  }

  p:first-of-type {
    margin-top: 20px;
  }

  span {
    font-weight: 600;
  }
`;
