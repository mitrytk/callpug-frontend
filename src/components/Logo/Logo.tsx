import { LogoSvg, LogoContainer, LogoImg, TextLogo } from "./Logo.styled";

interface LogoProps {
  size?: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
  return (
    <LogoContainer>
      <TextLogo>Call</TextLogo>
      <LogoImg>
        <LogoSvg />
      </LogoImg>
    </LogoContainer>
  );
};
