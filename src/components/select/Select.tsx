import * as React from 'react';
import styled from 'styled-components';

import {
  motion
} from 'framer-motion';

import {
  SVGChevronBottom
} from '../icons';

import {
  Floater, Input,
  Paper
} from "..";

import {
  SelectContext
} from "./context";

import {
  SelectOption,
  SelectOptionProps
} from "./SelectOption";

import {
  SelectedValue
} from "./types";

interface SelectFunctionComponent<T> extends React.FunctionComponent<T> {
  Option: React.FunctionComponent<SelectOptionProps>;
}

interface SelectProps {

  /** Type of border for the select */
  borderType?: 'full' | 'bottom' | 'none';

  /** classname for the select */
  className?: string;

  /** Select Options to show in the floater */
  children: React.ReactNode;

  /** Default value of the select */
  defaultValue?: string;

  /** Disabled state of the select */
  disabled?: boolean;

  /** Formik validation error */
  error?: string;

  /** Function that provides the error to use in custom component */
  errorComponent?: (error: string) => React.ReactNode;

  /** Function to handle change event */
  onChange?: (e: Event, value: SelectedValue) => void;

  /** Function to handle when option is selected */
  onSelect?: React.MouseEventHandler<HTMLDivElement>;

  /** Text to show in select before a selection is made */
  placeholder?: string;
}

const chevronVariants = {
  closed: {
    rotate: 0
  },
  open: {
    rotate: 180
  },
};

const Container = styled.div``;

const FloaterContainer = styled(Paper)`
  margin: 5px 0;
`;

export const Select: SelectFunctionComponent<SelectProps> = (props) => {
  const {
    borderType,
    className,
    children,
    disabled,
    error,
    errorComponent,
    onChange,
    onSelect,
    placeholder
  } = props;

  const [anchorElement, setAnchorElement] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState<SelectedValue>(
    {
      optionValue: '',
      optionTitle: '',
      optionKey: ''
    }
  );

  const onInputFocus = React.useCallback((e) => {
    setAnchorElement(e.target);
  }, []);

  const onInputBlur = React.useCallback(() => {
    setAnchorElement(null);
  }, []);

  const handleOnChange = React.useCallback((e, value) => {
    if (onChange) {
      onChange(e, value);
    }

    setSelectedValue(value);
  }, [setSelectedValue, onChange]);

  return (
    <Container>
      <Input
        borderType={borderType}
        className={className}
        disabled={disabled}
        error={error}
        errorComponent={errorComponent}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        value={selectedValue.optionTitle}
        placeholder={placeholder}
        readOnly
        inputSuffix={
          <motion.span
            style={{ height: '18px', width: '18px'}}
            initial={"closed"}
            exit={"closed"}
            animate={anchorElement == null ? 'closed' : 'open'}
            variants={chevronVariants}
          >
            <SVGChevronBottom height={18} width={18}/>
          </motion.span>
        }
      />
      <Floater
        position={'bottom'}
        anchorElement={anchorElement}
        open={anchorElement !== null}
        matchAnchorWidth
      >
        <SelectContext.Provider value={{
          onChange: handleOnChange,
          onSelect,
          selectedValue
        }}>
          <FloaterContainer>
            {children}
          </FloaterContainer>
        </SelectContext.Provider>
      </Floater>
    </Container>
  );
};

Select.Option = SelectOption;



