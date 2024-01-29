import styled, { css } from "styled-components";

interface NavigationProps {
    closed: number;
  }

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationStyled = styled.nav<NavigationProps>`
  @media screen and (max-width: 767.98px) {
    position: absolute;

    top: 0;
    left: 0;

    background-color: green;
    width: 100%;
    height: 100vh;

    transition: 0.3s;

    ${props =>
    !props.closed ? css``:
    css`
      transform: translateY(-100vh);
    `}
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;
