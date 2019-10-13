import posed from 'react-pose';

import styled, {
  css
} from 'styled-components';

interface ContentProps {
  collapseType?: 'panel' | 'stack';
  ghost?: boolean;
}

const AnimateContentContainer = posed.div({
  closed: {
    height: 0,
    transition: (props: any) => ({
      ease: 'easeInOut',
      duration: props.theme.animations.milliseconds.veryFast,
    })
  },
  open: {
    height: 'auto',
    transition: (props: any) => ({
      ease: 'easeInOut',
      duration: props.theme.animations.milliseconds.veryFast,
    })
  }
});

export const ContentContainer = styled(AnimateContentContainer)`
  overflow: hidden;
`;

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
