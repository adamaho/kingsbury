import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '../../styles/theme';

import {
  ITheme,
  theme
} from '../../styles/theme';

export interface INoticeProps {
  avatar?: React.ReactNode;
  className?: string;
  contentRight?: React.ReactNode;
  description?: React.ReactNode | string;
  hidePill?: boolean;
  theme: ITheme;
  title?: React.ReactNode;
  type: 'info' | 'default' | 'warning' | 'success' | 'danger';
}

class NoticeComponent extends React.Component<INoticeProps> {

  static propTypes = {
    title: PropTypes.string
  }

  render() {
    const {
      className,
      title,
      description,
      avatar,
      hidePill,
      contentRight
    } = this.props;

    return (
      <div className={className}>
        {avatar &&
          <div className="avatar">
            {avatar}
          </div>
        }
        <div className="content" >
          {!hidePill &&
            <div className="pill" />
          }
          <div className="right-content">
            <div className="title-content">
              {title &&
                <div className="title">{title}</div>
              }
              {description &&
                <div className="description">{description}</div>
              }
            </div>
            {contentRight &&
              <div className="content-right">
                {contentRight}
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

const Notice = styled(NoticeComponent)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 400px;
  padding: 10px 0px;

  .avatar {
    height: ${(props: INoticeProps) => props.theme.notice.avatarHeight};
    width: ${(props: INoticeProps) => props.theme.notice.avatarWidth};
    margin-right: 5px;
  }

  .content {
    display: flex;
    flex: 1;

    .right-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    }

    .pill {
      background: ${(props: INoticeProps) => props.theme.colors[props.type]};
      width: ${(props: INoticeProps) => props.theme.notice.pillWidth};
      border-radius: ${(props: INoticeProps) => props.theme.notice.pillRadius};
      min-height: ${(props: INoticeProps) => props.theme.notice.pillMinHeight};
      margin-right: 5px;
    }

    .title-content {
      .title {
        font-size: ${(props: INoticeProps) => props.theme.notice.titleFontSize};
        font-weight: ${(props: INoticeProps) => props.theme.notice.titleFontWeight};
        color: ${(props: INoticeProps) => props.theme.notice.titleFontColor};
      }

      .description {
        font-size: ${(props: INoticeProps) => props.theme.notice.descriptionFontSize};
        font-weight: ${(props: INoticeProps) => props.theme.notice.descriptionFontWeight};
        color: ${(props: INoticeProps) => props.theme.notice.descriptionFontColor};
      } 
    }
  }
`;

Notice.defaultProps = {
  theme: theme,
  hidePill: false,
  type: 'default'
}

export default Notice;