import * as React from 'react';
import styled from 'styled-components';

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
  optionTitle: React.ReactNode;

  /** Global theme in ThemeProvider */
  theme?: any;
}

const Option = styled.div<any>`
  cursor: pointer;
  
  background-color: ${(props) => props.isSelected ? props.theme.colors.primary : props.theme.colors.white};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
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
