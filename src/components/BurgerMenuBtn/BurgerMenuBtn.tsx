import { BurgerBtn, BurgerContainer, BurgerLine } from "./BurgerMenuBtn.styled";

interface BurgerMenuProps {
  toggleMenu: () => void;
  closed: number;
}

export const BurgerMenuBtn = ({ toggleMenu, closed }: BurgerMenuProps) => {
  return (
    <BurgerBtn onClick={toggleMenu}>
      <BurgerContainer>
        <BurgerLine closed={closed ? 1 : 0} />
      </BurgerContainer>
    </BurgerBtn>
  );
};
