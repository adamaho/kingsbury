import React from 'react';
import PropTypes from 'prop-types';
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
  margin-left: 5px;
`;

const JustifiedContent = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
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

const Notice = (props) => {
  const {
    avatar,
    className,
    description,
    hidePill,
    rightContent,
    theme: themeProp,
    title,
    type
  } = props;

  return (
    <Container className={className}>
      {avatar &&
        <Avatar src={avatar} />
      }
      <Content>
        {!hidePill &&
          <Pill theme={themeProp} type={type} />
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
  rightContent: undefined,
  title: '',
  theme,
  type: 'success'
};

Notice.propTypes = {
  /** Component or image to show to the left of the pill */
  avatar: PropTypes.node,

  /** classname for the notice */
  className: PropTypes.string,

  /** Description of the notice */
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Hides the pill */
  hidePill: PropTypes.bool,

  /** Content to show to the right of the notice */
  rightContent: PropTypes.node,

  /** Title of the notice */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Type of the pill */
  type: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']),

  /** Global theme in ThemeProvider */
  theme: PropTypes.object

};

export default Notice;
