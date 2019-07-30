import * as React from 'react';
import styled from '../../styles/theme';

import {
  ITheme,
  theme
} from '../../styles/theme';

interface ICardProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  theme: ITheme;
}

class CardComponent extends React.Component<ICardProps> {
  render() {
    const {
      className,
      header,
      footer,
      children
    } = this.props;

    return (
      <div className={className}>
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
  height: ${(props: ICardProps) => props.theme.card.height};
  width: ${(props: ICardProps) => props.theme.card.width};

  background: ${(props: ICardProps) => props.theme.card.background};
  border: ${(props: ICardProps) => props.theme.card.outerBorder};
  box-shadow: ${(props: ICardProps) => props.theme.card.boxShadow};
  border-radius: ${(props: ICardProps) => props.theme.card.borderRadius};

  .header {
    background: ${(props: ICardProps) => props.theme.card.headerBackground};
    height: ${(props: ICardProps) => props.theme.card.headerHeight};
    border-bottom: ${(props: ICardProps) => props.theme.card.innerBorder};
    border-top-left-radius: ${(props: ICardProps) => props.theme.card.borderRadius};
    border-top-right-radius: ${(props: ICardProps) => props.theme.card.borderRadius};
  }

  .footer {
    background: ${(props: ICardProps) => props.theme.card.footerBackground};
    height: ${(props: ICardProps) => props.theme.card.footerHeight};
    border-top: ${(props: ICardProps) => props.theme.card.innerBorder};
    border-bottom-left-radius: ${(props: ICardProps) => props.theme.card.borderRadius};
    border-bottom-right-radius: ${(props: ICardProps) => props.theme.card.borderRadius};
  }
`;

Card.defaultProps = {
  theme: theme
}

export default Card;