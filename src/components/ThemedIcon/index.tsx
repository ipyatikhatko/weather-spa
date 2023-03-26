import { useAtomValue } from "jotai";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import { themeAtom } from "../../atoms/themeAtom";
import theme, { ThemeVariants } from "../../theme";

const StyledThemedIcon = styled.span<{ themeValue: ThemeVariants }>`
  svg {
    stroke: ${(props) => theme.colors.primary[props.themeValue]};
    color: ${(props) => theme.colors.primary[props.themeValue]};
  }
`;

type Props = {
  icon: ReactNode;
};

const ThemedIcon: FC<Props> = ({ icon }) => {
  const themeValue = useAtomValue(themeAtom);
  return (
    <>
      <StyledThemedIcon themeValue={themeValue}>{icon}</StyledThemedIcon>
    </>
  );
};

export default ThemedIcon;
