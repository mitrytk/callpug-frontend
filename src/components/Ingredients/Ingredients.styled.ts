import styled from "styled-components";
import { variables } from "../../styled/GlobalStyle";

export const IngredientsContainer = styled.div``;

export const ListIngredients = styled.ul`
    margin-bottom: 20px;
`;

export const AddIngredientButton = styled.button`
    background-color: ${variables.colors.subtitle};
    color: ${variables.colors.white};
    border-radius: 4px;

    font-family: ${variables.fonts.title};

    padding: 4px 10px;
    padding-bottom: 5px;
`;