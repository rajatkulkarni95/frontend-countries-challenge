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

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 40px 50px 0px 60px;
  height: 400px;
  width: 1200px;
`;

const Image = styled.img`
  width: 600px;
  margin-right: 100px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    line-height: 2;
  }
  span {
    font-weight: 600;
  }
`;
