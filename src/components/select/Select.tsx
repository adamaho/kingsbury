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

  /** Node to mount against */
  container?: () => HTMLElement | undefined;

  /** Default value of the select */
  defaultValue?: SelectedValue;

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

  /** Text to show in select before a selection is made */
  placeholder?: string;

  /** Text to show in select before a selection is made */
  selectSize?: 'small' | 'large';

  /** Global theme in ThemeProvider */
  theme?: any;

  /** value of the select */
  value?: SelectedValue;
}

const baseDefaultValue: SelectedValue =  {
  optionKey: '',
  optionTitle: '',
  optionValue: ''
};

const chevronVariants = {
  closed: {
    rotate: 0
  },
  open: {
    rotate: 180
  },
};

const Container = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
`;

const FloaterContainer = styled(Paper)`
  margin: 5px 0;
`;

export const Select: SelectFunctionComponent<SelectProps> = (props) => {
  const {
    animationProps,
    borderType,
    className,
    children,
    container,
    defaultValue,
    disabled,
    error,
    errorComponent,
    label,
    id,
    name,
    onChange,
    placeholder,
    selectSize,
    theme,
    value
  } = props;

  const [anchorElement, setAnchorElement] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState<SelectedValue>(defaultValue || baseDefaultValue);

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
    <Container id={'select'}>
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
        value={value ? value.optionTitle : selectedValue.optionTitle}
        placeholder={placeholder}
        theme={theme}
        inputSize={selectSize}
        readOnly
        inputSuffix={
          <motion.span
            style={{ lineHeight: '0' }}
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
        container={container}
        animationProps={animationProps}
        position={['bc', 'tc']}
        anchorElement={anchorElement}
        open={anchorElement !== null}
        matchAnchorWidth
      >
        <SelectContext.Provider value={{
          onChange: handleOnChange,
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
  animationProps: undefined,
  selectSize: 'small'
};

Select.Option = SelectOption;



