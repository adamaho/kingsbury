import * as React from 'react';

import styled, {
  ITheme,
  theme
} from '../../styles/theme';

import {
  ItemType
} from '../../types';

export interface ITagProps extends React.HTMLAttributes<HTMLDivElement> {
  text: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tagType: ItemType
  theme: ITheme;
}

const TagComponent: React.FunctionComponent<ITagProps> = ({
  text,
  onClick,
  className
}) => (
  <div
    className={className}
    onClick={onClick}
  >
    {text}
  </div>
);

TagComponent.defaultProps = {
  tagType: 'primary'
};

const Tag = styled(TagComponent)`
  background-color: ${(props) => props.theme.colors[props.tagType]}
`;
