// Modules
import * as React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Styled from 'styled-components/native';

// Types
import {
  IProps,
  IStyledLabel,
  IStyledTouchable,
  IStyledWrapper,
  IStyledModal,
  IStyledOverlay,
  IStyledPickerWrapper,
} from './date-picker.types';

// Shared
import {majorScale, minorScale} from '../scales';
import {DeviceUtils} from '../utilities';

// Styles
const StyledTouchable = Styled.TouchableOpacity<IStyledTouchable>``;
const StyledWrapper = Styled.View<IStyledWrapper>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%; height: 44px;

  border-bottom-width: 1px;
  border-top-width: ${({$isUnderlined}) => ($isUnderlined ? 0 : 1)}px;
  border-right-width: ${({$isUnderlined}) => ($isUnderlined ? 0 : 1)}px;
  border-left-width: ${({$isUnderlined}) => ($isUnderlined ? 0 : 1)}px;
  border-color: ${({theme}) => theme.colors.grayThree};
  border-radius: 4px;

  paddingVertical: ${minorScale(1, 'px')};
  paddingHorizontal: ${({$isUnderlined}) => {
    return $isUnderlined ? 0 : majorScale(1, 'px');
  }};
`;
const StyledModal = Styled.Modal<IStyledModal>``;
const StyledOverlay = Styled.TouchableOpacity<IStyledOverlay>`
  flex: 1;
  background-color: #24242482;
`;
const StyledPickerWrapper = Styled.View<IStyledPickerWrapper>`
  background: ${({theme}) => theme.colors.white};
  height: 220px;
  overflow: hidden;
`;
const StyledLabel = Styled(Text)<IStyledLabel>`
  font-weight: 700;
  font-size: ${({$isSmallFont}) => ($isSmallFont ? '14px' : '18px')};
  margin-bottom: ${({$isSmallFont}) => {
    return $isSmallFont ? minorScale(1, 'px') : majorScale(1, 'px');
  }};
`;

// Shared
import Icon from '../icon/icon';
import Text from '../text/text';

// Component
const DatePicker: React.FC<IProps> = React.memo(
  ({
    label,
    isUnderlined = false,
    customDateFormatter,
    selectedDate,
    onDateChange,
    ...rest
  }): React.ReactElement => {
    // State
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    // Get Formatted Date
    const getFormattedDate = (date: Date): string => {
      if (customDateFormatter) {
        return customDateFormatter(date);
      }

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return [month, day, year].join('/');
    };

    // On Change Date
    const onChange = (_event: any, date: any): void => {
      // Weird Android Implementation
      // See: https://github.com/react-native-datetimepicker/datetimepicker#basic-usage-with-state
      setIsOpen(DeviceUtils.isIos());

      onDateChange(date || selectedDate);
    };

    // Open Picker
    const openPicker = () => {
      setIsOpen(true);
    };

    // Hide Picker
    const hidePicker = () => {
      setIsOpen(false);
    };

    const isAndroid: boolean = DeviceUtils.isAndroid();
    const isIos: boolean = DeviceUtils.isIos();

    return (
      <React.Fragment>
        {label && (
          <StyledLabel muted={isUnderlined} $isSmallFont={isUnderlined}>
            {label}
          </StyledLabel>
        )}

        <StyledTouchable activeOpacity={1} onPress={openPicker}>
          <StyledWrapper $isUnderlined={isUnderlined}>
            <Text>{getFormattedDate(selectedDate)}</Text>
            <Icon type="calendar" size={16} />
          </StyledWrapper>
        </StyledTouchable>

        {/* Android */}
        {isAndroid && isOpen ? (
          <DateTimePicker
            display="spinner"
            value={selectedDate}
            onChange={onChange}
          />
        ) : null}

        {/* IOS */}
        <StyledModal
          visible={isIos && isOpen}
          supportedOrientations={['portrait', 'landscape']}
          animationType="fade"
          transparent>
          <StyledOverlay activeOpacity={1} onPress={hidePicker} />
          <StyledPickerWrapper>
            <DateTimePicker
              {...rest}
              display="spinner"
              value={selectedDate}
              onChange={onChange}
            />
          </StyledPickerWrapper>
        </StyledModal>
      </React.Fragment>
    );
  },
);

// Properties
DatePicker.displayName = 'DatePicker';

// Exports
export default DatePicker;
