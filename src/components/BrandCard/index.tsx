import { useMotionValue, useTransform } from 'framer-motion';

import { CardDetails } from 'components';

import { brandAdidasDataMock } from './brandDataMock';
import * as s from './styles';

const BrandCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <s.CardContainer>
      <s.CardWrapper
        aria-label="BrandCard component"
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: 'grabbing' }}
      >
        <s.TopContainer>
          <s.CircleWrapper>
            <s.Circle />
          </s.CircleWrapper>
          <s.BrandText>{brandAdidasDataMock.productTitle}</s.BrandText>
          <s.ProductWrapper>
            <s.Product
              style={{ rotate: '-25deg', x, y, rotateX, rotateY, z: 10000 }}
              drag
              dragElastic={0.12}
            >
              <s.ProductImage src={brandAdidasDataMock.productImage} />
            </s.Product>
          </s.ProductWrapper>
        </s.TopContainer>
        <s.BottomContainer>
          <CardDetails {...brandAdidasDataMock} />
        </s.BottomContainer>
      </s.CardWrapper>
    </s.CardContainer>
  );
};

export default BrandCard;
