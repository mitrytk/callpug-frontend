import { BurgerBtn, BurgerLine } from "./BurgerMenuBtn.styled";

interface BurgerMenuProps {
  toggleMenu: () => void;
  closed: number;
}

export const BurgerMenuBtn = ({toggleMenu, closed}:BurgerMenuProps) => {
    
  return (
    <BurgerBtn onClick={toggleMenu}>
        <BurgerLine closed={closed ? 1 : 0}/>
    </BurgerBtn>
  );
};
