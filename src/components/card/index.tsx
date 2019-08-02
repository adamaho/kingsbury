import * as React from 'react';

import styled, {
  css
} from '../../styles/theme';

import {
  ITheme,
  theme
} from '../../styles/theme';

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  theme: ITheme;
}

class CardComponent extends React.Component<ICardProps> {
  render() {
    const {
      className,
      header,
      footer,
      onClick,
      children
    } = this.props;

    return (
      <div className={`kingsbury-card ${className}`} onClick={onClick}>
        {header &&
          <div className="header">
            {header}
          </div>
        }
        <div className="content">
          {children}
        </div>
        {footer &&
          <div className="footer">
            {footer}
          </div>
        }
      </div>
    );
  }
}

const Card = styled(CardComponent)`
  height: ${(props) => props.theme.card.height};
  width: ${(props) => props.theme.card.width};

  background: ${(props) => props.theme.card.background};
  border: ${(props) => props.theme.card.outerBorder};
  box-shadow: ${(props) => props.theme.card.boxShadow};
  border-radius: ${(props) => props.theme.card.borderRadius};

  opacity: ${(props) => props.onClick ?
    0.8 :
    1
  };

  cursor: ${(props) => props.onClick ?
    'pointer' :
    'default'
  };

  transition: .35s cubic-bezier(.19, 1, .4, 1);

  ${(props) => props.onClick && css`
      &:hover {
        opacity: 1;
        transform: translateY(-1%);
        box-shadow: 0 7px 21px 0 rgba(0,0,0,.07);
      }
    `
  }

  .header {
    background: ${(props) => props.theme.card.headerBackground};
    height: ${(props) => props.theme.card.headerHeight};
    border-bottom: ${(props) => props.theme.card.innerBorder};
    border-top-left-radius: ${(props) => props.theme.card.borderRadius};
    border-top-right-radius: ${(props) => props.theme.card.borderRadius};
  }

  .footer {
    background: ${(props) => props.theme.card.footerBackground};
    height: ${(props) => props.theme.card.footerHeight};
    border-top: ${(props) => props.theme.card.innerBorder};
    border-bottom-left-radius: ${(props) => props.theme.card.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.card.borderRadius};
  }
`;

Card.defaultProps = {
  theme: theme
}

export default Card;