import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { CountryContext } from "../../context";

export const BorderDetails = ({ borders }) => {
  const countries = useContext(CountryContext);

  let borderNames = borders.map((border) =>
    countries.filter((country) => country.alpha3Code === border)
  );
  console.log(borderNames.slice(0, 3));
  return (
    <Wrapper>
      <span>Border Countries: </span>
      <p>
        {borderNames
          .slice(0, 3)
          .map((subArray) =>
            subArray.map((border) => (
              <SmallButton to={`/country/${border.name}`}>
                {border.name}
              </SmallButton>
            ))
          )}
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  grid-area: footer;

  @media (max-width: 440px) {
    margin-bottom: 20px;
  }
`;

const SmallButton = styled(Link)`
  border: none;
  letter-spacing: 1.2;
  padding: 5px 5px;
  width: auto;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: inherit;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  ${({ theme }) => `
  background: ${theme.colors.background};
  color: ${theme.colors.text_color};
  font-family: ${theme.font};
  font-weight: 300;
`}
`;
