import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Search } from "../../components/search";
import { CountryCard } from "../../components/country-card";
import { FilterRegions } from "../../components/filter-region";
import { CountryContext } from "../../context";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const countries = useContext(CountryContext);

  return (
    <>
      <SearchHeader>
        <Search handleChange={handleChange} value={search} />
        <FilterRegions value={region} handleChange={handleRegionChange} />
      </SearchHeader>
      <HomeStyle>
        {region === ""
          ? countries
              .filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((filteredCountries) => (
                <CountryCard
                  key={filteredCountries.numericCode}
                  {...filteredCountries}
                />
              ))
          : countries
              .filter((country) => country.region === region)
              .map((filteredCountries) => (
                <CountryCard
                  key={filteredCountries.numericCode}
                  {...filteredCountries}
                />
              ))}
      </HomeStyle>
    </>
  );
};

const HomeStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 40px 0 30px;
  flex-wrap: wrap;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
