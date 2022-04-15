import nikeAirImage from 'assets/images/air-jordan-transparent.png';
import nikeLogo from 'assets/images/nike-logo.png';

export type ProductProps = {
  brandName: string;
  productTitle?: string;
  productDescription: string;
  productPrice: string;
  productImage?: string;
  buyActionText: string;
  brandLogo: string;
};

export const brandNikeDataMock: ProductProps = {
  brandName: 'NIKE',
  productTitle: 'NIKE AIR',
  productDescription: 'AIR JORDAN 1 MID SE GC',
  productPrice: 'U$ 856',
  productImage: nikeAirImage,
  buyActionText: 'YOUR NEXT SHOES',
  brandLogo: nikeLogo
};
