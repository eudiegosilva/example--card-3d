import styled, { css } from 'styled-components';

export const DetailsWrapper = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    padding: 2.5em 6px 0 6px;
    line-height: 1.4;
  `}
`;

export const TextSmall = styled.span`
  ${({ theme }) => css`
    font-size: 11px;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weights.regular};
    text-transform: uppercase;
  `}
`;

export const TextMedium = styled.span`
  ${({ theme }) => css`
    font-size: 18px;
    color: ${theme.colors.white};
    font-weight: ${theme.font.weights.bold};
    text-transform: uppercase;
  `}
`;

export const SpacedHorizontalContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & + div {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    text-transform: uppercase;
    padding: ${theme.spacings.extraSmall} ${theme.spacings.medium};
    font-size: ${theme.font.sizes.default};
    font-weight: ${theme.font.weights.bold};
    font-family: ${theme.font.family};
    transition: ${theme.transition.fast};
    border-radius: ${theme.border.radius.small};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
    border: 0.25rem solid ${theme.colors.primary};
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.primary};
    }
  `}
`;

export const BrandLogoWrapper = styled.div`
  ${() => css`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const BrandLogo = styled.img`
  ${() => css`
    width: auto;
    height: 13px;
  `}
`;
