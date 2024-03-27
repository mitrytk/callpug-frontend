import styled from "styled-components";
import { variables } from "../../styled/GlobalStyle";

export const IngredientItem = styled.li`
  display: flex;

  font-family: ${variables.fonts.text};
  font-size: 18px;
`;

export const LabelIngredientName = styled.label`
`;

export const InputIngredientName = styled.input`
  width: 100%;

  border: 0;
  border-radius: 0;
  border-bottom: 1px solid ${variables.colors.text};
  outline: 0;

  background-color: ${variables.colors.opacity};
`;

export const InputIngredientQuantity = styled.input`
  width: 20%;
  margin-left: 10px;
  border: 0;
  outline: 0;
  border-radius: 0;
  border-bottom: 1px solid ${variables.colors.text};

  background-color: ${variables.colors.opacity};
`;

export const SelectContainer = styled.div`
    position: relative;

    /* &&::after {
        content: '';
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        left: 0;
        top: 0;

        background-color: red;
    } */
`;

export const SelectIngredientUnit = styled.select`


  font-family: ${variables.fonts.text};
  font-size: 18px;

  color: ${variables.colors.text};
  background-color: ${variables.colors.opacity};
  border: 0;
  border-radius: 0;
  padding: 0;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const OptionIngredientUnit = styled.option`
    z-index: 0;

`;
