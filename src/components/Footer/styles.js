import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    a {
      text-decoration: none;
      color: inherit;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;
