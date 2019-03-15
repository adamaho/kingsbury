import * as React from 'react';
import styled from '../../styles/theme';

import {
  ITheme,
  theme
} from '../../styles/theme';

interface INoticeProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  avatar?: React.ReactNode;
  type: 'info' | 'default' | 'warning' | 'success' | 'danger';
  actions?: React.ReactNode;
  className?: string;
  theme: ITheme;
}

class NoticeComponent extends React.Component<INoticeProps> {
  render() {
    const {
      className,
      title,
      description,
      avatar,
      actions,
      children
    } = this.props;

    return (
      <div className={className}>
        {avatar &&
          <div className="avatar">
            {avatar}
          </div>
        }
        <div className="pill" />
        <div className="content" >
          {title &&
            <div className="title">{title}</div>
          }
          {description &&
            <div className="description">{description}</div>
          }
        </div>
        {actions &&
          <div className="actions">
            {actions}
          </div>
        }
      </div>
    );
  }
}

const Notice = styled(NoticeComponent)`
  display: flex;
  align-items: center;
  min-height: 75px;
  width: 100%;

  .avatar {
    height: 50px;
    width: 50px;
  }

  .pill {
    background: ${(props: INoticeProps) => props.theme.colors[props.type]};
    width: 4px;
    border-radius: 2px;
    height: 100%;
  }
`;

Notice.defaultProps = {
  theme: theme,
  type: 'default'
}

export default Notice;