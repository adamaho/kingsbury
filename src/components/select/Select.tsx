import * as React from 'react';
import styled from 'styled-components';

import {
  motion,
  MotionProps
} from 'framer-motion';

import {
  SVGChevronBottom
} from '../icons';

import {
  theme
} from '../../theme';

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

  /** Animation props for motion.div */
  animationProps?: MotionProps;

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

  /** Label of the input */
  label?: React.ReactNode;

  /** id of the input to be used with Formik */
  id?: string;

  /** name of the input to be used with Formik */
  name?: string;

  /** Function to handle change event */
  onChange?: (e: Event, value: SelectedValue) => void;

  /** Function to handle when option is selected */
  onSelect?: React.MouseEventHandler<HTMLDivElement>;

  /** Text to show in select before a selection is made */
  placeholder?: string;

  /** Global theme in ThemeProvider */
  theme?: any;
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
    animationProps,
    borderType,
    className,
    children,
    disabled,
    error,
    errorComponent,
    label,
    id,
    name,
    onChange,
    onSelect,
    placeholder,
    theme
  } = props;

  const [anchorElement, setAnchorElement] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState<SelectedValue>(
    {
      optionValue: '',
      optionTitle: '',
      optionKey: ''
    }
  );

  const onInputBlur = React.useCallback(() => {
    setAnchorElement(null);
  }, []);

  const onInputClick = React.useCallback((e) => {
    if (anchorElement) {
      setAnchorElement(null);
    } else {
      setAnchorElement(e.target);
      e.target.focus();
    }
  }, [anchorElement]);

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
        label={label}
        id={id}
        name={name}
        onBlur={onInputBlur}
        onClick={onInputClick}
        value={selectedValue.optionTitle}
        placeholder={placeholder}
        theme={theme}
        readOnly
        inputSuffix={
          <motion.span
            style={{ height: '18px', width: '18px'}}
            initial={"closed"}
            exit={"closed"}
            animate={anchorElement == null ? 'closed' : 'open'}
            transition={{ type: 'tween' }}
            variants={chevronVariants}
          >
            <SVGChevronBottom height={18} width={18}/>
          </motion.span>
        }
      />
      <Floater
        animationProps={animationProps}
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
          <FloaterContainer theme={theme}>
            {children}
          </FloaterContainer>
        </SelectContext.Provider>
      </Floater>
    </Container>
  );
};

Select.defaultProps = {
  theme,
  animationProps: undefined
};

Select.Option = SelectOption;



