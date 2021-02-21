import React from "react";

import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((prod, index) => (
          <ProductCard key={index}>
            <ProductImg src={prod.img} alt={prod.alt} />
            <ProductInfo>
              <ProductTitle>{prod.name}</ProductTitle>
              <ProductDesc>{prod.desc}</ProductDesc>
              <ProductPrice>{prod.price}</ProductPrice>
              <ProductButton>{prod.button}</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsWrapper>
    </ProductsContainer>
  );
};

export default Products;
