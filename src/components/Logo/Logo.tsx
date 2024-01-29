import { LogoSvg, LogoContainer } from "./Logo.styled"

interface LogoProps {
    size?: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
function size() {
    switch (props.size) {
        case 'small':
            return '100px'
        
        case 'middle':
            return '160px'

        case 'big':
            return '200px'
    
        default:
            return '160px'
            
    }
} ; 
    return (
        <LogoContainer size={size()}>
            <LogoSvg />
        </LogoContainer>
    )
}