import React from "react";
import styled from "styled-components";

export const FilterRegions = ({ value, handleChange }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div>
      <Select value={value} onChange={handleChange}>
        <Option key="default" value="">
          Filter by Region
        </Option>
        {regions.map((region) => (
          <Option key={region} value={region}>
            {region}
          </Option>
        ))}
      </Select>
    </div>
  );
};

const Select = styled.select`
  ${({ theme }) => `
    background: ${theme.colors.elements_bg};
    color: ${theme.colors.text_color};
    font-family: ${theme.font};
    font-weight: 600;
    `}
  box-shadow: 0 0 5px rgba(0,0,0,0.5);
  padding: 15px;
  margin: 30px 50px 0 0;
  width: 250px;
  border: none;
  border-radius: 5px;
`;

const Option = styled.option`
  ${({ theme }) => `
background: ${theme.colors.elements_bg};
color: ${theme.colors.text_color};
font-family: ${theme.font};
font-weight: 300;
`}
  margin-left:10px;
`;
