import React from 'react';
import SvgIcon from '@components/svgIcon/SvgIcon';
import Logo from '@components/logo/Logo';
import { FooterContent, Phrase, StyledFooter, StyledSvg } from './Footer.styles';

// @ts-ignore
import Wave from '../../../public/assets/images/wave.svg';
// @ts-ignore
import LogoBlack from '../../../public/assets/icons/shopping-cart-alt-black.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent>
        <StyledSvg src={Wave} />
        <SvgIcon src={LogoBlack} width="60px" height="60px" />
        <Logo />
        <Phrase>QUALIDADE E PREÇO BAIXO</Phrase>
      </FooterContent>
    </StyledFooter>
  );
};

export default Footer;
