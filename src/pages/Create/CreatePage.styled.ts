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

  color: ${variables.colors.red};
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
  outline: none;

  border: 1px solid ${variables.colors.text};
  border-radius: 4px;

  padding: 6px 12px;
  margin-top: 16px;
  margin-bottom: 24px;

  background-color: ${variables.colors.opacity};

  font-family: ${variables.fonts.text};
  font-size: 18px;

  color: ${variables.colors.text};
  background-color: ${variables.colors.opacity};
`;
export const DescriptionTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;

  border: 1px solid ${variables.colors.text};
  border-radius: 4px;
  background-color: ${variables.colors.opacity};

  resize: none;
  outline: none;

  padding: 6px 12px;
  margin-bottom: 24px;
`;

export const ContainerStep = styled.div``;
export const ListSteps = styled.ul``;
export const AddStepButton = styled.button``;

export const CreateButton = styled.button`
  padding: 3px 5px;
  background-color: ${variables.colors.green};
  color: ${variables.colors.white};
  border-radius: 4px;

  font-family: ${variables.fonts.title};

  padding: 4px 10px;
  padding-bottom: 5px;
`;
