import React from 'react';
import { StyledLogo } from './Logo.styles';
import { LogoProps } from './Logo.types';

const Logo = ({ isHeader, onClick }: LogoProps) => {
  const handleClick = () => onClick && onClick();

  return (
    <StyledLogo onClick={handleClick} isHeader={isHeader}>
      supermercado
    </StyledLogo>
  );
};

export default Logo;
