import { useAtomValue } from "jotai";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { themeAtom } from "../../atoms/themeAtom";
import theme, { ThemeVariants } from "../../theme";

type HeadingSizes = "sm" | "md" | "lg" | "xl" | "huge";

const sizes: Record<HeadingSizes, string> = {
  sm: "18px",
  md: "24px",
  lg: "32px",
  xl: "42px",
  huge: "20vw",
};

interface StyledHeadingProps {
  size?: HeadingSizes;
  themeValue: ThemeVariants;
}

const StyledHeading = styled.h1<StyledHeadingProps>`
  margin: 0;
  width: fit-content;
  color: ${(props) => theme.colors.text[props.themeValue]};
  font-weight: 400;
  font-size: ${(props) => (props.size ? sizes[props.size] : sizes["md"])};
`;

type Props = {
  children: ReactNode;
  size?: HeadingSizes;
};

const Heading: FC<Props> = ({ children, ...rest }) => {
  const themeValue = useAtomValue(themeAtom);
  return (
    <StyledHeading themeValue={themeValue} {...rest}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
