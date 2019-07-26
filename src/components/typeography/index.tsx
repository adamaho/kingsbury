import styled, {
  ITheme,
} from '../../styles/theme';

export interface ITypeographyProps {
  theme: ITheme;
}

export const H1 = styled.h1`
  margin: ${(props: ITypeographyProps) => props.theme.typeography.h1.margin};
`;

export const H2 = styled.h2`
  margin: ${(props: ITypeographyProps) => props.theme.typeography.h2.margin};
`;

export const H3 = styled.h3`
  margin: ${(props: ITypeographyProps) => props.theme.typeography.h3.margin};
`;

export const H4 = styled.h4`
  margin: ${(props: ITypeographyProps) => props.theme.typeography.h4.margin};
`;

export const P = styled.p`
  margin: ${(props: ITypeographyProps) => props.theme.typeography.p.margin};
`;