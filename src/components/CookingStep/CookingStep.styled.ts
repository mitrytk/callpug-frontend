import styled from "styled-components";
import { variables } from "../../styled/GlobalStyle";
import { ReactComponent as iconAddPhoto } from "../../img/icon-add-image.svg";

export const CookingStepItem = styled.li``;

export const ContainerPhoto = styled.div`
position: relative;
aspect-ratio: 16/9;
overflow: hidden;

margin-bottom: 24px;
border-radius: 4px;
`;

export const InputPhoto = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const LabelPhoto = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding: 8px 16px;

  border: 2px solid ${variables.colors.gray};
  border-radius: 4px;
  background-color: ${variables.colors.white};
  cursor: pointer;
`;

export const IconAddPfotoSVG = styled(iconAddPhoto)`
fill: ${variables.colors.gray};
width: 60px;
height: auto;
`;

export const ImagePreview = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
pointer-events: none;
`;

export const CropperContainer = styled.div`

`;

export const BtnSaveCroppedImg = styled.button`
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 101;
    color: white;
    background-color: ${variables.colors.dark_green};
    border-radius: 4px;
    padding: 4px 12px;
`;



