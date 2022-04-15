import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled.div`
  ${() => css`
    width: 100%;
    perspective: 2000;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
export const CardWrapper = styled(motion.div)`
  ${({ theme }) => css`
    width: 285px;
    height: 500px;
    position: relative;

    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    border-radius: ${theme.border.radius.extraLarge};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    cursor: grab;
  `}
`;

export const CircleWrapper = styled.div`
  ${({ theme }) => css`
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    border-top-right-radius: ${theme.border.radius.extraLarge};
  `}
`;

export const Circle = styled.div`
  ${({ theme }) => css`
    width: 350px;
    height: 350px;
    top: -4.2em;
    right: -10em;
    position: absolute;
    z-index: ${theme.layers.menu};

    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius.rounded};
  `}
`;

export const TopContainer = styled.div`
  ${() => css`
    width: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    flex: 1.2;
    align-items: center;
    justify-content: flex-end;
    padding: 1em 15px;
  `}
`;
export const BottomContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 0.8;
    padding: 0 1em;
    padding-bottom: ${theme.spacings.medium};
  `}
`;

export const BrandText = styled.h1`
  ${({ theme }) => css`
    z-index: ${theme.layers.overlay};

    margin: 0;
    color: ${theme.colors.white};
    font-size: calc(${theme.font.sizes.huge} * 1.2);
    font-weight: ${theme.font.weights.bold};
    text-transform: uppercase;
  `}
`;

export const ProductWrapper = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Product = styled(motion.div)`
  ${({ theme }) => css`
    width: auto;
    height: 190px;
    z-index: ${theme.layers.alwaysOnTop};

    user-select: none;
    margin-right: 2.5em;
    margin-top: 2.5em;
  `}
`;

export const ProductImage = styled.img`
  ${() => css`
    width: auto;
    height: 100%;

    user-select: none;
  `}
`;
