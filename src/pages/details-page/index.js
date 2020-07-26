import React from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

export const DetailedView = ({ countries }) => {
  const { id } = useParams();
  const singleCountry = countries.filter(
    (country) => country.name.toLowerCase() == id.toLowerCase()
  );

  console.log(singleCountry);

  return (
    <>
      <BackButton to="/">
        <MdKeyboardBackspace
          style={{ position: "relative", top: "3px", right: "5px" }}
        />{" "}
        Back
      </BackButton>
      {singleCountry.map((country) => (
        <DetailWrapper key={country.numericCode}>
          <Image src={country.flag} />
          <TextWrapper>
            <LeftText>
              <h1>{country.name}</h1>
              <p>
                <span>Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {country.population}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </LeftText>
            <RightText>
              <p>
                <span>Top Level Domain: </span>
                {country.topLevelDomain.join()}
              </p>
              <p>
                <span>Currencies: </span>
                {country.currencies[0].name}
              </p>
              <p>
                <span>Languages: </span>
                {country.languages.map((lang) => `${lang.name}, `)}
              </p>
            </RightText>
          </TextWrapper>
          <BorderCountries>
            <p>
              <span>Border Countries: </span>
              {country.borders.slice(0, 3).map((border) => (
                <SmallButton key={border}>{border}</SmallButton>
              ))}
            </p>
          </BorderCountries>
        </DetailWrapper>
      ))}
    </>
  );
};

const BackButton = styled(Link)`
  display: inline-block;
  border: none;
  letter-spacing: 1;
  padding: 10px 30px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 60px;
  margin-top: 40px;
  text-decoration: inherit;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  ${({ theme }) => `
    background: ${theme.colors.background};
    color: ${theme.colors.text_color};
    font-family: ${theme.font};
    font-weight: 600;
  `}
`;

const SmallButton = styled.button`
  border: none;
  letter-spacing: 1;
  padding: 10px 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  ${({ theme }) => `
  background: ${theme.colors.background};
  color: ${theme.colors.text_color};
  font-family: ${theme.font};
  font-weight: 300;
`}
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 50px 0 60px;
  height: 400px;
  width: 1200px;
`;

const Image = styled.img`
  width: 600px;
`;

const TextWrapper = styled.div`
  display: flex;

  p {
    line-height: 2;
  }
  span {
    font-weight: 600;
  }
`;

const LeftText = styled.div`
  h1 {
    margin: 30px 0 30px 0;
  }
`;

const RightText = styled.div`
  margin: 102px 0 0 60px;
`;

const BorderCountries = styled.div`
  position: absolute;
  top: 500px;
  left: 820px;

  span {
    font-weight: 600;
    margin-right: 10px;
  }
`;
