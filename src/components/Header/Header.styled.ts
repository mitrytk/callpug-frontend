import styled, { css } from "styled-components";
import { NavLink, Link } from "react-router-dom";

interface MenuProps {
  closed: number;
}

interface HeaderProps {
  visible: number;
}

export const HeaderStyled = styled.div<HeaderProps>`
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px;

  background-color: #fff;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  transition: 0.3s;

  ${props => props.visible
      ? css`
        `
      : css`
          transform: translateY(-100%);
        `
  }
`;

export const Overlay = styled.div<MenuProps>`
  display: block;
  position: absolute;


  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.2);

  pointer-events: auto;

  ${(props) =>
    props.closed
      ? css``
      : css`
          background-color: rgba(0, 0, 0, 0);
          pointer-events: none;
        `}
`;

export const MenuStyled = styled.div<MenuProps>`
  @media screen and (max-width: 767.98px) {
    position: absolute;
    
    z-index: 1000;
    top: 0;
    right: 0;

    pointer-events: auto;
    overflow-y: auto;

    padding-top: 33px;

    background-color: #f8f8f8;
    width: 70%;
    height: 100vh;

    transition: 0.3s;

    ${(props) =>
      props.closed
        ? css``
        : css`
            transform: translateX(100vw);
          `}
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;

  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const NavLinkStyled = styled(NavLink)`
  margin-bottom: 20px;
  font-family: "NunitoRegular";
  font-size: 24px;
`;

export const LinkBtnCreate = styled(Link)`
  display: inline-block;

  background-color: #3498db;
  color: #ffffff;
  font-family: "ExoBold";
  font-size: 14px;

  border-radius: 8px;
  padding: 4px 12px 6px 12px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
