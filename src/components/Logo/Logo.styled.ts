import styled from "styled-components";
import { ReactComponent as callpugLogo } from "../../img/callpug_logo.svg";


export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    width: 50px;
    height: 50px;
`

export const TextLogo = styled.p`
  display: block;

  font-family: 'DancingScriptMedium';
  font-size: 32px;

  &::After {
    content: 'Pug';
    font-family: 'LatoRegular';
    font-size: 24px;
  }
`;

export const LogoSvg = styled(callpugLogo)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: scale(1.288);
`;
