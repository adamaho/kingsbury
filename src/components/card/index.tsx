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

const CardComponent: React.FunctionComponent<ICardProps> = ({
  className,
  header,
  footer,
  children
}) => (
  <div className={className}>
    {header &&
      <div className="card-header">
        {header}
      </div>
    }
    <div className="card-content">
      {children}
    </div>
    {footer &&
      <div className="card-footer">
        {footer}
      </div>
    }
  </div>
)

const Card = styled(CardComponent)`
  display: flex;
  flex-direction: column;

  height: ${(props: ICardProps) => props.theme.card.height};
  width: ${(props: ICardProps) => props.theme.card.width};

  background: ${(props: ICardProps) => props.theme.card.background};
  border: ${(props: ICardProps) => props.theme.card.outerBorder};
  box-shadow: ${(props: ICardProps) => props.theme.card.boxShadow};
  border-radius: ${(props: ICardProps) => props.theme.card.borderRadius};

  .card-header {
    background: ${(props: ICardProps) => props.theme.card.headerBackground};
    height: ${(props: ICardProps) => props.theme.card.headerHeight};
    border-bottom: ${(props: ICardProps) => props.theme.card.innerBorder};
    border-top-left-radius: ${(props: ICardProps) => props.theme.card.borderRadius};
    border-top-right-radius: ${(props: ICardProps) => props.theme.card.borderRadius};
  }

  .card-content {
    flex: 1
  }

  .card-footer {
    background: ${(props: ICardProps) => props.theme.card.footerBackground};
    height: ${(props: ICardProps) => props.theme.card.footerHeight};
    border-top: ${(props: ICardProps) => props.theme.card.innerBorder};
    border-bottom-left-radius: ${(props: ICardProps) => props.theme.card.borderRadius};
    border-bottom-right-radius: ${(props: ICardProps) => props.theme.card.borderRadius};
  }
`;

Card.defaultProps = {
  theme
}

export default Card;