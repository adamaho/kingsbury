import React from 'react';
import styled from 'styled-components';

import {
  theme
} from '../../theme';

import Avatar from '../avatar';

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

const Pill = styled.div`
  background: ${(props) => props.theme.colors[props.type]};
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

const RightContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Notice = (props) => {
  const {
    avatar,
    className,
    description,
    rightContent,
    theme,
    title,
    type
  } = props;

  return (
    <Container className={className}>
      {avatar &&
        <Avatar src={avatar} />
      }
      <Content>
        <Pill theme={theme} type={type} />
        <TitleContent>
          <Title theme={theme}>
            {title}
          </Title>
          <Description theme={theme}>
            {description}
          </Description>
        </TitleContent>
        {rightContent &&
          <RightContent>
            {rightContent}
          </RightContent>
        }
      </Content>
    </Container>
  );
};


// const Notice = styled(NoticeComponent)`

//   .avatar {
//     height: ${(props) => props.theme.notice.avatarHeight};
//     width: ${(props) => props.theme.notice.avatarWidth};
//     margin-right: 5px;
//   }

//   .content {
//     display: flex;
//     flex: 1;

//     .right-content {
//       display: flex;
//       justify-content: space-between;
//       width: 100%;
//       height: 100%;
//     }

//     .pill {
//       background: ${(props) => props.theme.colors[props.type]};
//       width: ${(props) => props.theme.notice.pillWidth};
//       border-radius: ${(props) => props.theme.notice.pillRadius};
//       min-height: ${(props) => props.theme.notice.pillMinHeight};
//       margin-right: 5px;
//     }

//     .title-content {
//       .title {
//         font-size: ${(props) => props.theme.notice.titleFontSize};
//         font-weight: ${(props) => props.theme.notice.titleFontWeight};
//         color: ${(props) => props.theme.notice.titleFontColor};
//       }

//       .description {
//         font-size: ${(props) => props.theme.notice.descriptionFontSize};
//         font-weight: ${(props) => props.theme.notice.descriptionFontWeight};
//         color: ${(props) => props.theme.notice.descriptionFontColor};
//       }
//     }
//   }
// `;

Notice.defaultProps = {
  theme,
  hidePill: false,
  type: 'success'
};

export default Notice;
