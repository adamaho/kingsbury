import styled, {
  ITheme,
} from '../../styles/theme';

export interface ITypeographyProps {
  theme: ITheme;
}

export const H1 = styled.span`
  display: block;
  font-size: 32px;
`;

export const H2 = styled.span`
  display: block;
  font-size: 24px;
`;

export const H3 = styled.span`
  display: block;
  font-size: 18px
`;

export const H4 = styled.span`
  display: block;
  font-size: 16px;
`;

export const P = styled.span`
  display: block;
  font-size: 12px;
`;