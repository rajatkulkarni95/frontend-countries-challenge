import React from "react";
import styled from "styled-components";
import { Search } from "../../components/search";

export const HomePage = () => {
  const handleChange = 3;

  return <Search handleChange={handleChange} value="" />;
};
