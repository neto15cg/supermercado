import React, { useEffect, useState } from 'react';
import CardProduct from '@components/cardProduct/CardProduct';
import Header from '@containers/Header/Header';
import { getProducts } from '@services/home';

import Section from '@components/section/Section';
import Footer from '@containers/Footer/Footer';
import BasicLoading from '@components/basicLoading/BasicLoading';
// @ts-ignore
import IconProduct from '../../../public/assets/images/document.png';
import { ProductContainer, ProductListContainer, ProductsContainer } from './home.styles';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const productsResponse: any = await getProducts();
      setProducts(productsResponse);
      setIsLoading(false);
    })();
  }, []);

  if (products && isLoading) {
    return (
      <Section>
        <BasicLoading />
      </Section>
    );
  }

  const totalValue = products.reduce((acc, val) => acc + val.total_value, 0);

  return (
    <>
      <Header total={totalValue} />
      <Section>
        <ProductsContainer>
          <ProductListContainer>
            {products.map(({ product, quantity, total_value, id }, index) => (
              <ProductContainer key={id + index}>
                <CardProduct description={product.name} srcImage={IconProduct} productValue={total_value} value={quantity} />
              </ProductContainer>
            ))}
          </ProductListContainer>
        </ProductsContainer>
      </Section>
      <Footer />
    </>
  );
};

export default HomePage;
