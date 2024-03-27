import styled from "styled-components";
import { variables } from "../../styled/GlobalStyle";

export const CreatePageStyled = styled.div`
  padding-top: 20px;
`;

export const Form = styled.form`
  padding-top: 10px;
  padding-right: 12px;
  padding-bottom: 10px;
  padding-left: 12px;

  border-radius: 4px;

  background-color: ${variables.colors.bgc};
`;

export const Title = styled.h1`

padding-left: 12px;
margin-bottom: 20px;
  font-family: ${variables.fonts.title};
  font-size: 24px;

  color: ${variables.colors.title};
`;

export const Subtitle = styled.h2`
  font-family: ${variables.fonts.subtitle};
  font-size: 20px;
  margin-bottom: 16px;
`;

export const LabelRecipeName = styled.label`
  font-family: ${variables.fonts.subtitle};
  font-size: 20px;
`;

export const InputRecipeName = styled.input`
  width: 100%;

  border: 0;
  border-radius: 0;
  border-bottom: 1px solid ${variables.colors.text};

  margin-bottom: 24px;

  background-color: ${variables.colors.opacity};

  font-family: ${variables.fonts.text};
  font-size: 18px;

  color: ${variables.colors.text};
  background-color: ${variables.colors.opacity};

  &&:focus {
    border: none;
  }
`;

export const ContainerStep = styled.div``;
export const ListSteps = styled.ul``;
export const AddStepButton = styled.button``;

export const CreateButton = styled.button`
  padding: 3px 5px;
  background-color: red;
`;