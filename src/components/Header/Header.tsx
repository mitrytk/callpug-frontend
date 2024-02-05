import React, { useState } from "react";
import { NavLinkStyled, Overlay } from "./Header.styled";
import { HeaderStyled } from "./Header.styled";
import { MenuStyled } from "./Header.styled";
import { NavigationStyled } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import { BurgerMenuBtn } from "../BurgerMenuBtn/BurgerMenuBtn";
import { LinkBtnCreate } from "./Header.styled";

export const Header = () => {
  const [closed, setClosed] = useState<boolean>(false);

  function toggleMenu() {
    setClosed((prevClosed) => !prevClosed);

    if (!closed) {
      document.body.style.overflow = "hidden";
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.overflow = "visible";
      document.body.style.pointerEvents = "auto";
    }
  }

  function onClickOverlay(e: React.MouseEvent) {
    const isCurrentElement = e.target === e.currentTarget;

    if (isCurrentElement) {
      toggleMenu();
    }
  }

  return (
    <HeaderStyled>
      <Logo size="middle" />
      <Overlay onClick={onClickOverlay} closed={closed ? 1 : 0}>
        <MenuStyled closed={closed ? 1 : 0}>
          <LinkBtnCreate onClick={toggleMenu} to="/create">
            Добавить рецепт
          </LinkBtnCreate>
          <NavigationStyled>
            <NavLinkStyled onClick={toggleMenu} to="/">
              {" "}
              Главная{" "}
            </NavLinkStyled>
            <NavLinkStyled onClick={toggleMenu} to="/recipes">
              Рецепты
            </NavLinkStyled>
            <NavLinkStyled onClick={toggleMenu} to="/articles">
              Статьи
            </NavLinkStyled>
          </NavigationStyled>
        </MenuStyled>
      </Overlay>
      <BurgerMenuBtn toggleMenu={toggleMenu} closed={closed ? 1 : 0} />
    </HeaderStyled>
  );
};
