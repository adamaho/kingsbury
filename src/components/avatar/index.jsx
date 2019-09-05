import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: 40px;
  width: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Avatar = (props) => {
  const {
    src,
    className
  } = props;

  let image;
  if (typeof src === 'function' || typeof src === 'object') {
    image = src;
  } else {
    image = <Image src={src} />;
  }

  return (
    <Container className={className}>
      {image}
    </Container>
  );
};

Avatar.defaultProps = {
  className: ''
};

Avatar.propTypes = {
  /** classname for the avatar */
  className: PropTypes.string,

  /** image src for the avatar */
  src: PropTypes.oneOfType([PropTypes.node]).isRequired,
};

export default Avatar;
