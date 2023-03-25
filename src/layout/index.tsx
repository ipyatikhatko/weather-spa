import { useAtomValue } from "jotai";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { themeAtom } from "../atoms/themeAtom";
import theme from "../theme";
import { ThemeVariants } from "../theme";
import Header from "./header";

const Background = styled.div<{ themeVariant: ThemeVariants }>`
  transition: background 0.5s;
  background: ${(props) => theme.colors.background[props.themeVariant]};
  width: 100%;
  height: 100%;
`;

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useAtomValue(themeAtom);
  return (
    <Background themeVariant={theme}>
      <Header />
      <main>{children}</main>
    </Background>
  );
};

export default Layout;
