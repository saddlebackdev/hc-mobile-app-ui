// Modules
import * as React from 'react';
import RNPickerSelect, {PickerStyle} from 'react-native-picker-select';
import Styled, {useTheme} from 'styled-components/native';

// Types
import {IStyledLabel, IProps} from './select-picker.types';
import {ITheme} from '../theming/theme-provider.types';

// Utils
import {DeviceUtils} from '../utilities';

// Components
import Text from '../text/text';
import {majorScale, minorScale} from '../scales';
import Icon from '../icon/icon';

// Styles
const StyledWrapper = Styled.View``;
const StyledLabel = Styled(Text)<IStyledLabel>`
  font-weight: 700;
  font-size: ${({$isSmallFont}) => ($isSmallFont ? '14px' : '18px')};
  margin-bottom: ${({$isSmallFont}) => {
    return $isSmallFont ? minorScale(1, 'px') : majorScale(1, 'px');
  }};
`;

// Get Styles
const getStyles = (
  {colors, typography}: ITheme,
  isUnderlined: boolean,
): Partial<PickerStyle> => {
  const baseStyles = {
    placeholder: {
      color: colors.grayFour,
      fontSize: typography.sizes.regular,
    },
    viewContainer: {
      backgroundColor: colors.white,
      borderColor: colors.grayThree,
      borderRadius: 3,
      borderTopWidth: isUnderlined ? 0 : 1,
      borderRightWidth: isUnderlined ? 0 : 1,
      borderLeftWidth: isUnderlined ? 0 : 1,
      borderBottomWidth: 1,
      height: 44,
    },
    input: {
      color: colors.graySix,
    },
    iconContainer: {
      marginTop: 4,
      marginRight: 4,
    },
    chevronContainer: {
      paddingTop: 12,
    },
  };

  // Android
  if (DeviceUtils.isAndroid()) {
    return {
      ...baseStyles,
      inputAndroid: {
        ...baseStyles.input,
        marginTop: -6,

        // Something wrong with Typescript
        // Doesnt allow using string if moved to baseStyles
        fontWeight: '500',
      },
    };
  }

  // iOS
  if (DeviceUtils.isIos()) {
    return {
      ...baseStyles,
      viewContainer: {
        ...baseStyles.viewContainer,
        paddingHorizontal: isUnderlined ? 0 : majorScale(1),
        paddingVertical: majorScale(1),
      },
      inputIOS: {
        ...baseStyles.input,

        // Something wrong with Typescript
        // Doesnt allow using string if moved to baseStyles
        fontWeight: '500',
      },
    };
  }

  // Others
  return baseStyles;
};

// Get Icon
const getIcon = () => {
  return () => {
    if (DeviceUtils.isAndroid()) {
      return null;
    }

    return <Icon size={14} type="chevronDown" />;
  };
};

// Component
const SelectPicker: React.FC<IProps> = ({
  label,
  placeholder = 'Select an option',
  shouldShowPlaceholder = true,
  isUnderlined = false,
  ...rest
}): React.ReactElement => {
  // Hooks
  const theme = useTheme();

  const additionalProps = {
    ...rest,
    placeholder: {},
  };

  if (shouldShowPlaceholder) {
    additionalProps.placeholder = {
      label: placeholder,
      value: null,
    };
  }

  return (
    <StyledWrapper>
      {label && (
        <StyledLabel muted={isUnderlined} $isSmallFont={isUnderlined}>
          {label}
        </StyledLabel>
      )}

      <RNPickerSelect
        Icon={getIcon()}
        style={getStyles(theme, isUnderlined)}
        fixAndroidTouchableBug
        {...additionalProps}
      />
    </StyledWrapper>
  );
};

// Exports
export default SelectPicker;
