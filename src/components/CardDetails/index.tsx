import { ProductProps } from 'components/BrandCard/brandDataMock';

import * as s from './styles';

const CardDetails = ({
  brandName,
  productDescription,
  productPrice,
  buyActionText,
  brandLogo
}: ProductProps) => (
  <s.DetailsWrapper aria-label="CardDetails component">
    <s.TextSmall>{brandName}</s.TextSmall>
    <s.SpacedHorizontalContainer>
      <s.TextMedium>{productDescription}</s.TextMedium>
      <s.TextMedium>{productPrice}</s.TextMedium>
    </s.SpacedHorizontalContainer>

    <s.SpacedHorizontalContainer>
      <s.TextMedium>{buyActionText}</s.TextMedium>
      <s.Button>BUY</s.Button>
    </s.SpacedHorizontalContainer>

    <s.BrandLogoWrapper>
      <s.BrandLogo src={brandLogo} />
    </s.BrandLogoWrapper>
  </s.DetailsWrapper>
);

export default CardDetails;
