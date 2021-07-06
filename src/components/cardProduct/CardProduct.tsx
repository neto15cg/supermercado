import React from 'react';
import { currencyFormatterWithoutPrefix } from '@utils/currencyFormatHelper';
import { CardContainer, CardContent, CardFooter, ImageContainer, InputContainer, InputContent, ValueContent } from './CardProduct.styles';
import { CardProductProps } from './CardProduct.types';

const CardProduct = ({ onChange, srcImage, description, value, productValue }: CardProductProps) => {
  return (
    <CardContainer>
      {srcImage && (
        <ImageContainer>
          <img alt="drink" src={srcImage} width="100px" />
        </ImageContainer>
      )}
      <CardContent>{description}</CardContent>
      <CardFooter>
        <InputContainer>
          <InputContent>Qtd: {value}</InputContent>
        </InputContainer>
        {productValue && (
          <ValueContent>
            R$ &nbsp;<strong>{currencyFormatterWithoutPrefix(productValue)}</strong>
          </ValueContent>
        )}
      </CardFooter>
    </CardContainer>
  );
};

export default CardProduct;
