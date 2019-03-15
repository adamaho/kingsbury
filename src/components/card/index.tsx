import * as React from 'react';
import styled from '../../styles/theme';

import {
  ITheme,
  theme
} from '../../styles/theme';

interface ICardProps {
  header?: React.ReactNode,
  footer?: React.ReactNode,
  className?: string;
  theme: ITheme
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
        <div>
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
  border: ${(props: ICardProps) => props.theme.card.outerBorder};
  box-shadow: ${(props: ICardProps) => props.theme.card.boxShadow};
  border-radius: ${(props: ICardProps) => props.theme.card.borderRadius};

  .header {
    height: ${(props: ICardProps) => props.theme.card.headerHeight};
    border-bottom: ${(props: ICardProps) => props.theme.card.innerBorder};
  }

  .footer {
    height: ${(props: ICardProps) => props.theme.card.footerHeight};
    border-top: ${(props: ICardProps) => props.theme.card.innerBorder};
  }
`;

Card.defaultProps = {
  theme: theme
}

export default Card;