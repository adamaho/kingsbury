import * as React from 'react';

import styled, {
  css
} from 'styled-components';

import {
  theme
} from '../../theme';

import {
  SelectContext
} from "./context";

export interface SelectOptionProps {

  /** Key of the option */
  optionKey: number | string;

  /** Value of the option when selected */
  optionValue: number | string;

  /** Option Content to show */
  optionTitle: string;

  /** Global theme in ThemeProvider */
  theme?: any;
}

const Option = styled.div<any>`
  cursor: pointer;
  
  ${(props) => props.isSelected && css`
    background: ${props.theme.select.option.selectBackground};
    font-weight: ${props.theme.select.option.fontWeight};
  `}

  padding: ${(props) => props.theme.select.option.padding};
  
  &:first-child {
    border-top-left-radius: ${(props) => props.theme.select.borderRadius};
    border-top-right-radius: ${(props) => props.theme.select.borderRadius};
  }
  
    &:last-child {
    border-bottom-left-radius: ${(props) => props.theme.select.borderRadius};
    border-bottom-right-radius: ${(props) => props.theme.select.borderRadius};
  }

  &:hover {
    background-color: ${(props) => props.theme.select.option.hoverBackground};
  }
`;

/** Select.Option */
export const SelectOption: React.FunctionComponent<SelectOptionProps> = (props) => {
  const {
    optionKey,
    optionValue,
    optionTitle,
    theme
  } = props;

  const {
    onChange,
    selectedValue
  } = React.useContext(SelectContext);

  const handleOnChange = React.useCallback((e) => {
    if (onChange) {
      onChange(e, { optionValue, optionTitle, optionKey });
    }
  }, [optionValue, optionTitle, optionKey, onChange]);

  const isSelected = selectedValue ? selectedValue.optionKey === optionKey : false;

  return (
    <Option
      key={optionKey}
      isSelected={isSelected}
      onClick={handleOnChange}
      theme={theme}
    >
      {optionTitle}
    </Option>
  );
};

SelectOption.defaultProps = {
  theme
};
