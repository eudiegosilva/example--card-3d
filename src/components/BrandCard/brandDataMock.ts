import adidasSuperstarImage from 'assets/images/adidas-superstar-transparent.png';
import adidasLogo from 'assets/images/adidas-logo.png';

export type ProductProps = {
  brandName: string;
  productTitle?: string;
  productDescription: string;
  productPrice: string;
  productImage?: string;
  buyActionText: string;
  brandLogo: string;
};

export const brandAdidasDataMock: ProductProps = {
  brandName: 'ADIDAS',
  productTitle: 'SUPERSTAR',
  productDescription: 'ADIDAS SUPERSTAR 82',
  productPrice: 'R$ 599,99',
  productImage: adidasSuperstarImage,
  buyActionText: 'O MELHOR DA ADIDAS',
  brandLogo: adidasLogo
};
