import { useAtomValue } from "jotai";
import React, { FC, HTMLAttributes, HTMLProps } from "react";
import styled from "styled-components";
import { themeAtom } from "../../atoms/themeAtom";
import theme from "../../theme";
import { ThemeVariants } from "../../theme";

const StyledButton = styled.button<{ themeVariant: ThemeVariants }>`
  cursor: pointer;
  appearance: none;
  border: none;
  border-radius: 12px;
  min-height: 20px;
  max-height: 30px;
  box-shadow: 0 0 5px 1px ${(props) => theme.colors.shadow[props.themeVariant]};
  padding: 0px 15px;
  color: ${(props) => theme.components.button.text[props.themeVariant]};
  background-color: ${(props) =>
    theme.components.button.bg[props.themeVariant]};
`;

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const theme = useAtomValue(themeAtom);
  return <StyledButton themeVariant={theme} {...props} />;
};

export default Button;
