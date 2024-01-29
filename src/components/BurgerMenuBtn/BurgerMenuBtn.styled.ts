import styled, { css } from "styled-components";

interface BurgerLineProps {
  closed: number;
}

export const BurgerBtn = styled.button`
  position: absolute;

  top: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  @media screen and (min-width: 768px){
    display: none;
  }
`;

export const BurgerLine = styled.div<BurgerLineProps>`
  display: block;
  width: 100%;
  height: 5px;
  background-color: red;
  border-radius: 2px;

  transition: 0.3s;

  ${props =>
    !props.closed ? css``:
    css`
      width: 0%;
    `}

  &::before {
    content: "";
    display: block;
    position: absolute;

    top: 0;
    left: 0;

    background-color: red;
    width: 100%;
    height: 5px;
    border-radius: 2px;

    transition: 0.3s;

    ${props =>
      !props.closed ? css``:
      css`
        top: 50%;
        transform: translateY(-50%) rotate(45deg) scaleX(1.2);
      `}
  }

  &::after {
    content: "";
    display: block;
    position: absolute;

    bottom: 0;
    left: 0;

    background-color: red;
    width: 100%;
    height: 5px;
    border-radius: 2px;

    transition: 0.3s;

    ${props =>
      !props.closed ? css``:
      css`
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg) scaleX(1.2);
      `}
  }
`;
