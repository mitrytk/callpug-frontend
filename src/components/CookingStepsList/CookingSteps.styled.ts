import styled from "styled-components";
import { variables } from "../../styled/GlobalStyle";
import { ReactComponent as iconAddButton } from "../../img/icon-add-button.svg";

export const CookingStepsContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const CookingStepsList = styled.ul`
`;

export const CookingStepsAddBtn = styled.button`
  width: 100%;
  height: 150px;
  border: 2px dashed ${variables.colors.green};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

export const IconAddSVG = styled(iconAddButton)`
width: 60px;
height: auto;
`;
