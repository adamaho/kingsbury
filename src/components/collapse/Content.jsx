import posed from 'react-pose';

import styled, {
  css
} from 'styled-components';

const AnimateContentContainer = posed.div({
  closed: {
    height: 0,
    transition: (props) => ({
      ease: 'easeInOut',
      duration: props.theme.animations.milliseconds.veryFast,
    })
  },
  open: {
    height: 'auto',
    transition: (props) => ({
      ease: 'easeInOut',
      duration: props.theme.animations.milliseconds.veryFast,
    })
  }
});

export const ContentContainer = styled(AnimateContentContainer)`
  overflow: hidden;
`;

export const Content = styled.div`
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
