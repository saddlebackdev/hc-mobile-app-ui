// Modules
import React from 'react';
import Styled from 'styled-components/native';

// Types
import {IProps, IStyledButton, IStyledLabel} from './button.types';

// Styles
const StyledButton = Styled.TouchableOpacity<IStyledButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  border-radius: 4px;

  height: ${({small}) => {
    return small ? '32px' : '44px';
  }};

  background-color: ${({appearance, color, disabled, theme}) => {
    if (appearance === 'outline') {
      return theme.colors.white;
    }

    if (disabled) {
      return theme.colors.grayThree;
    }

    switch (color) {
      case 'primary': {
        return theme.colors.primaryLight;
      }
      case 'secondary': {
        return theme.colors.secondaryLight;
      }
      case 'info': {
        return theme.colors.infoLight;
      }
      case 'success': {
        return theme.colors.successLight;
      }
      case 'warning': {
        return theme.colors.warningLight;
      }
      case 'danger': {
        return theme.colors.dangerLight;
      }
      default: {
        return theme.colors.primaryLight;
      }
    }
  }};

  border-width: ${({appearance}) => {
    return appearance === 'outline' ? '1px' : '0px';
  }};

  border-color: ${({appearance, color, disabled, theme}) => {
    if (appearance === 'filled') {
      return 'transparent';
    }

    if (disabled) {
      return theme.colors.grayThree;
    }

    switch (color) {
      case 'primary': {
        return theme.colors.primaryLight;
      }
      case 'secondary': {
        return theme.colors.secondaryLight;
      }
      case 'info': {
        return theme.colors.infoLight;
      }
      case 'success': {
        return theme.colors.successLight;
      }
      case 'warning': {
        return theme.colors.warningLight;
      }
      case 'danger': {
        return theme.colors.dangerLight;
      }
      default: {
        return theme.colors.primaryLight;
      }
    }
  }};
`;
const StyledLabel = Styled.Text<IStyledLabel>`
  font-weight: 500;

  font-size: ${({small, theme}) => {
    return small
      ? `${theme.typography.sizes.small}px`
      : `${theme.typography.sizes.regular}px`;
  }};

  color: ${({appearance, color, disabled, theme}) => {
    if (appearance === 'filled') {
      return theme.colors.white;
    }

    if (disabled) {
      return theme.colors.grayThree;
    }

    switch (color) {
      case 'primary': {
        return theme.colors.primaryLight;
      }
      case 'secondary': {
        return theme.colors.secondaryLight;
      }
      case 'info': {
        return theme.colors.infoLight;
      }
      case 'success': {
        return theme.colors.successLight;
      }
      case 'warning': {
        return theme.colors.warningLight;
      }
      case 'danger': {
        return theme.colors.dangerLight;
      }
      default: {
        return theme.colors.primaryLight;
      }
    }
  }};
`;

// Component
const Button: React.FC<IProps> = React.memo(
  ({
    disabled = false,
    appearance = 'filled',
    color = 'primary',
    children,
    small = false,
    ...props
  }): React.ReactElement => {
    // Do not allow overwriting styles
    if (props.style) {
      props.style = {};
    }

    return (
      <StyledButton
        testID="button"
        activeOpacity={0.75}
        disabled={disabled}
        appearance={appearance}
        color={color}
        small={small}
        {...props}>
        <StyledLabel
          testID="button-label"
          appearance={appearance}
          small={small}
          color={color}
          disabled={disabled}>
          {children}
        </StyledLabel>
      </StyledButton>
    );
  },
);

// Properties
Button.displayName = 'Button';

// Exports
export default Button;
