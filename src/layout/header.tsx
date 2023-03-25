import { useAtom } from "jotai";
import React from "react";
import styled from "styled-components";
import { themeAtom } from "../atoms/themeAtom";
import Button from "../components/Button";
import theme, { ThemeVariants } from "../theme";

const StyledHeader = styled.nav`
  padding: 1rem 2rem;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

const StyledAppName = styled.h1<{ themeVariant: ThemeVariants }>`
  color: ${(props) => theme.colors.text[props.themeVariant]};
`;

const Header = () => {
  const [themeValue, setThemeValue] = useAtom(themeAtom);

  const toggleTheme = () => {
    setThemeValue(themeValue == "🌚" ? "🌞" : "🌚");
  };

  return (
    <StyledHeader>
      <StyledAppName themeVariant={themeValue}>Weather App</StyledAppName>
      <Button onClick={toggleTheme}>
        <span style={{ fontSize: "18px" }}>{themeValue}</span>
      </Button>
    </StyledHeader>
  );
};

export default Header;
