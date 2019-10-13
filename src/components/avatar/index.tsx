import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background-color: grey;
`;

interface AvatarProps {
  /** classname for the avatar */
  className?: string;

  /** src for the avatar */
  src?: React.ReactNode;
}

export const Avatar: React.FunctionComponent<AvatarProps> = (props) => {
  const {
    src,
    className
  } = props;

  return (
    <Container className={className}>
      {src}
    </Container>
  );
};

Avatar.defaultProps = {
  className: ''
};

export default Avatar;