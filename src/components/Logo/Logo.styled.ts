import styled from "styled-components";
import { ReactComponent as callpugLogo } from "../../img/callpug_logo.svg";

interface LogoProps {
    size?: string;
}
export const LogoContainer = styled.div<LogoProps>`
  display: flex;
  align-items: center;
  justify-content: center;
    width: ${props=> props.size};
    height: ${props=> props.size};
`

export const LogoSvg = styled(callpugLogo)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: scale(1.288);
`;
