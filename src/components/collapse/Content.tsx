import * as React from 'react';

import {
  motion
} from 'framer-motion';

import styled, {
  css
} from 'styled-components';

interface ContentContainerProps {
  animate: 'open' | 'closed';
}

interface ContentProps {
  collapseType?: 'panel' | 'stack';
  ghost?: boolean;
}

export const ContentContainer: React.FunctionComponent<ContentContainerProps> = ({ children, animate }) => {
  const variants = {
    closed: {
      height: 0,
      overflow: 'hidden'
    },
    open: {
      height: 'auto',
      overflow: 'unset'
    },
  }

  return (
    <motion.div
      initial="closed"
      exit="closed"
      animate={animate}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const Content = styled.div<ContentProps>`
  padding: ${(props) => props.theme.collapse.contentPadding};

  background: ${(props) => props.theme.collapse.contentBackground};


  ${(props) => props.collapseType === 'panel' && css`
    border-bottom-left-radius: ${props.theme.collapse.borderRadius};
    border-bottom-right-radius: ${props.theme.collapse.borderRadius};
  `};

  ${(props) => props.ghost && css`
    background: transparent;
  `};
`;
