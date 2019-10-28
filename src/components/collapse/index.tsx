import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

import Header from './Header';

import {
  ContentContainer,
  Content
} from './Content';

interface CollapseProps {
  /** Option to handle if collapse is active */
  active?: boolean;

  /** Content to show in the collapse */
  children?: React.ReactNode;

  /** classname for the collapse */
  className?: string;

  /** Determines if collapse should default to open */
  defaultActive?: boolean;

  /** Will make collapse transparent */
  ghost?: boolean;

  /** Content to render in the header */
  header?: React.ReactNode;

  /** Unique key to identify collpase. Used for Accordian */
  itemKey: string | number;

  /** The type of collapse */
  collapseType?: 'stack' | 'panel';

  /** Function to handle when collapse state changes */
  onChange?: (itemKey: string | number) => void,

  /** Global theme in ThemeProvider */
  theme?: any;
}

interface CollapseState {
  active?: boolean;
}

interface ContainerProps {
  collapseType?: 'panel' | 'stack';
  ghost?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props) => props.ghost && css`
    background: transparent;
  `};

  ${(props) => props.collapseType === 'panel' && css`
    border-radius: ${props.theme.collapse.borderRadius};
    box-shadow: ${props.theme.collapse.boxShadow};
  `}
`;

export const Collapse: React.FunctionComponent<CollapseProps> = ({
	active,
	className,
	children,
	collapseType,
	defaultActive,
	ghost,
	header,
	itemKey,
	onChange,
	theme
}) => {
	const [isActive, setActive] = React.useState(defaultActive);

	function onHeaderClick() {
		setActive(!isActive);
	}

	// React.useEffect(() => {
	// 	setActive(active);
	// }, [active]);

	// React.useEffect(() => {
	// 	if (onChange) {
	// 		onChange(itemKey);
	// 	}
	// },[isActive]);

	return (
		<Container
			className={className}
			ghost={ghost}
			collapseType={collapseType}
			theme={theme}
			key={itemKey}
		>
			<Header
				ghost={ghost}
				open={isActive}
				onClick={onHeaderClick}
				collapseType={collapseType}
				theme={theme}
			>
				{header}
			</Header>
			<ContentContainer
				animate={isActive ? 'open' : 'closed'}
			>
				<Content
					ghost={ghost}
					theme={theme}
					collapseType={collapseType}
				>
					{children}
				</Content>
			</ContentContainer>
		</Container>
	);
};

Collapse.defaultProps = {
	active: undefined,
	children: '',
	className: '',
	defaultActive: false,
	ghost: false,
	header: '',
	onChange: undefined,
	itemKey: '',
	collapseType: 'panel',
	theme
};

// class Collapse extends React.PureComponent<CollapseProps, CollapseState> {
  // constructor(props: CollapseProps) {
  //   super(props);
	//
  //   const {
  //     defaultActive
  //   } = props;
	//
  //   this.state = {
  //     active: defaultActive
  //   };
  // }
	//
  // static defaultProps = {
  //   active: undefined,
  //   children: '',
  //   className: '',
  //   defaultActive: false,
  //   ghost: false,
  //   header: '',
  //   onChange: undefined,
  //   itemKey: '',
  //   collapseType: 'panel',
  //   theme
  // };

  // static getDerivedStateFromProps(props: CollapseProps) {
  //   if (props.active !== undefined) {
  //     return {
  //       active: props.active
  //     };
  //   }
	//
  //   return null;
  // }

//   onHeaderClick = () => {
//     const {
//       active,
//       onChange,
//       itemKey
//     } = this.props;
//
//     if (active !== undefined) {
//       if (onChange) {
//         onChange(itemKey);
//       }
//     } else {
//       this.setState((state) => {
//         if (state.active) {
//           return {
//             active: false
//           };
//         }
//
//         return {
//           active: true
//         };
//       }, () => {
//         if (onChange) {
//           onChange(itemKey);
//         }
//       });
//     }
//   }
//
//   render() {
//     const {
//       className,
//       children,
//       collapseType,
// 			itemKey,
//       header,
//       ghost,
//       theme: themeProp
//     } = this.props;
//
//     const {
//       active
//     } = this.state;
//
//     return (
//       <Container
//         className={className}
//         ghost={ghost}
//         collapseType={collapseType}
//         theme={themeProp}
// 				key={itemKey}
//       >
//         <Header
//           ghost={ghost}
//           open={active}
//           onClick={this.onHeaderClick}
//           collapseType={collapseType}
//           theme={themeProp}
//         >
//           {header}
//         </Header>
//         <ContentContainer
//           animate={active ? 'open' : 'closed'}
//         >
//           <Content
//             ghost={ghost}
//             theme={themeProp}
//             collapseType={collapseType}
//           >
//             {children}
//           </Content>
//         </ContentContainer>
//       </Container>
//     );
//   }
// }
//
// export default Collapse;
