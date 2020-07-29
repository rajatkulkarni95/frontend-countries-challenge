import React, { useContext } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { CountryContext } from "../../context";
import { CountryBasicDetail } from "../../components/country-details/country-basics";
import { CountryAdditionalDetails } from "../../components/country-details/country-additional";
import { BorderDetails } from "../../components/country-details/border-details";

export const DetailedView = () => {
  const { id } = useParams();
  const countries = useContext(CountryContext);
  const singleCountry = countries.filter(
    (country) => country.name.toLowerCase() === id.toLowerCase()
  );

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
            <h1>{country.name}</h1>
            <CountryBasicDetail {...country} />
            <CountryAdditionalDetails {...country} />
            <BorderDetails borders={country.borders} />
          </TextWrapper>
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
  margin: 40px 0px 30px 60px;
  text-decoration: inherit;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  ${({ theme }) => `
    background: ${theme.colors.background};
    color: ${theme.colors.text_color};
    font-family: ${theme.font};
    font-weight: 600;
  `}

  @media (max-width:440px ) {
    padding: 5px 30px;
    margin-left: 20px;
    margin-top: 30px;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 40px 50px 0px 60px;
  height: 400px;
  width: 90vw;

  @media (max-width: 440px) {
    margin: 120px 15px 20px 15px;
    width: 90vw;

    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 40%;

  margin-right: 100px;

  @media (max-width: 440px) {
    width: 90vw;
    height: 250px;
    margin-top: 60px;
  }
`;

const TextWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header header header header header"
    "left left left right right right"
    "footer footer footer footer footer footer";
  grid-gap: 20px;

  h1 {
    grid-area: header;
  }

  p {
    line-height: 1.5;
  }

  span {
    font-weight: 600;
  }

  @media (max-width: 440px) {
    grid-template-areas:
      "header header header"
      "left left left"
      "right right right"
      "footer footer footer";
  }
`;
