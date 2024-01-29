import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HeaderStyled } from "./Header.styled";
import { NavigationStyled } from "./Header.styled";
import { Logo } from "../Logo/Logo";
import { BurgerMenuBtn } from "../BurgerMenuBtn/BurgerMenuBtn";

export const Header = () => {
  const [closed, setClosed] = useState<boolean>(false);

  function toggleMenu () {
      setClosed(prevClosed=> !prevClosed )
  }

  return (
    <HeaderStyled>
      <Logo size="middle" />
      <NavigationStyled closed={closed ? 1 : 0}>
        <NavLink to="/"> Главная </NavLink>
        <NavLink to="/recipes">Рецепты</NavLink>
      </NavigationStyled>
      <BurgerMenuBtn toggleMenu={toggleMenu} closed={closed ? 1 : 0}/>
    </HeaderStyled>
  );
};
