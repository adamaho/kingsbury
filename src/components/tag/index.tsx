import * as React from 'react';

import styled, {
  ITheme,
  css,
  theme
} from '../../styles/theme';

import {
  ItemType
} from '../../types';

import {
  P
} from '../typeography';

interface ITagProps extends React.HTMLAttributes<HTMLDivElement> {
  text: React.ReactNode;
  className?: string;
  onClick?: () => void;
  tagType: ItemType;
  theme: ITheme;
};

const TagComponent: React.FunctionComponent<ITagProps> = ({
  text,
  onClick,
  className
}) => (
  <span
    className={`kingsbury-tag ${className}`}
    onClick={onClick}
  >
    <P className="kingsbury-tag-text">{text}</P>
  </span>
);

const Tag = styled(TagComponent)`
  background-color: ${(props) => `rgba(${props.theme.colors[`${props.tagType}RGB`]}, 0.2)`};
  padding: ${(props) => props.theme.tag.padding};
  height: ${(props) => props.theme.tag.height};

  color: ${(props) => props.theme.colors.black};
  border: 1px solid ${(props) => props.theme.colors[props.tagType]};
  border-radius: ${(props) => props.theme.tag.borderRadius};

  cursor: ${(props) => props.onClick ?
    'pointer' :
    'default'
  };

  ${(props) => props.onClick && css`
      &:hover {
        opacity: 0.6;
      }
    `
  }

  transition: all ${(props) => props.theme.animations.time.fast};

  span {
    font-size: ${(props) => props.theme.tag.textFontSize};
  }
`;

Tag.defaultProps = {
  theme: theme
}

export default Tag;
