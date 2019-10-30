import * as React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../theme';

import {
  Avatar
} from '../avatar';

export interface NoticeProps {
  /** Component or image to show to the left of the pill */
  avatar?: React.ReactNode;

  /** classname for the notice */
  className?: string;

  /** Description of the notice */
  description?: React.ReactNode;

  /** Hides the pill */
  hidePill?: boolean;

  /** Content to show to the right of the notice */
  rightContent?: React.ReactNode;

  /** Title of the notice */
  title?: React.ReactNode;

  /** Type of the pill */
  noticeType?: 'primary' | 'success' | 'danger' | 'warning' | 'info';

  /** Global theme in ThemeProvider */
  theme?: any;
}

interface PillProps {
  noticeType?: 'primary' | 'success' | 'danger' | 'warning' | 'info';
}

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
  margin-left: 5px;
`;

const JustifiedContent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const Pill = styled.div<PillProps>`
  background: ${(props) => props.theme.colors[props.noticeType || 'primary']};
  width: ${(props) => props.theme.notice.pillWidth};
  border-radius: ${(props) => props.theme.notice.pillRadius};
  min-height: ${(props) => props.theme.notice.pillMinHeight};
  margin-right: 5px;
`;

const TitleContent = styled.div``;

const Title = styled.div`
  font-size: ${(props) => props.theme.notice.titleFontSize};
  font-weight: ${(props) => props.theme.notice.titleFontWeight};
  color: ${(props) => props.theme.notice.titleFontColor};
`;

const Description = styled.div`
  font-size: ${(props) => props.theme.notice.descriptionFontSize};
  font-weight: ${(props) => props.theme.notice.descriptionFontWeight};
  color: ${(props) => props.theme.notice.descriptionFontColor};
`;

export const Notice: React.FunctionComponent<NoticeProps> = (props) => {
  const {
    avatar,
    className,
    description,
    hidePill,
    rightContent,
    theme: themeProp,
    title,
    noticeType
  } = props;

  return (
    <Container className={className}>
      {avatar &&
        <Avatar src={avatar} />
      }
      <Content>
        {!hidePill &&
          <Pill theme={themeProp} noticeType={noticeType} />
        }
        <JustifiedContent>
          <TitleContent>
            <Title theme={themeProp}>
              {title}
            </Title>
            <Description theme={themeProp}>
              {description}
            </Description>
          </TitleContent>
          {rightContent &&
            rightContent
          }
        </JustifiedContent>
      </Content>
    </Container>
  );
};

Notice.defaultProps = {
  avatar: undefined,
  className: '',
  description: '',
  hidePill: false,
  rightContent: '',
  title: '',
  theme,
  noticeType: 'success'
};
