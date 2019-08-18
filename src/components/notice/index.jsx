import React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../styles/theme';

const NoticeComponent = ({
  className,
  title,
  description,
  avatar,
  hidePill,
  contentRight
}) => (
  <div className={`kingsbury-notice ${className}`}>
    {avatar &&
      <div className="avatar">
        {avatar}
      </div>
    }
    <div className="content">
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

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 400px;
  padding: 10px 0px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Notice = (props) => {

  const {
    className
  } = props;

  return (
    <Container className={className}>
      <Content>
        
      </Content>
    </Container>
  );
};


const Notice = styled(NoticeComponent)`

  .avatar {
    height: ${(props) => props.theme.notice.avatarHeight};
    width: ${(props) => props.theme.notice.avatarWidth};
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
      background: ${(props) => props.theme.colors[props.type]};
      width: ${(props) => props.theme.notice.pillWidth};
      border-radius: ${(props) => props.theme.notice.pillRadius};
      min-height: ${(props) => props.theme.notice.pillMinHeight};
      margin-right: 5px;
    }

    .title-content {
      .title {
        font-size: ${(props) => props.theme.notice.titleFontSize};
        font-weight: ${(props) => props.theme.notice.titleFontWeight};
        color: ${(props) => props.theme.notice.titleFontColor};
      }

      .description {
        font-size: ${(props) => props.theme.notice.descriptionFontSize};
        font-weight: ${(props) => props.theme.notice.descriptionFontWeight};
        color: ${(props) => props.theme.notice.descriptionFontColor};
      } 
    }
  }
`;

Notice.defaultProps = {
  theme,
  hidePill: false,
  type: 'default'
};

export default Notice;
