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
import Icon from '../icon/icon';
import Text from '../text/text';
import {majorScale, minorScale} from '../scales';
import {DeviceUtils} from '../utilities';

// Styles
const StyledTouchable = Styled.TouchableOpacity<IStyledTouchable>``;
const StyledTouchable1 = Styled.TouchableOpacity<IStyledTouchable>`
  alignSelf: flex-end;
  paddingRight: 20px;
  paddingTop: 5px;
  `;
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
  font-size: ${({$isSmallFont}) => ($isSmallFont ? '14px' : '18px')};

  margin-bottom: ${({$isSmallFont}) => {
    return $isSmallFont ? minorScale(1, 'px') : majorScale(1, 'px');
  }};
`;

// Component
const DatePicker: React.FC<IProps> = React.memo(
  ({
    label,
    isUnderlined = false,
    customDateFormatter,
    selectedDate,
    onDateChange,
    withDoneConfirmButtonIos = false,
    ...rest
  }): React.ReactElement => {
    // State
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [date, setDate] = React.useState(selectedDate || new Date());

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

    // On Change handler for iOS
    const onChangeIos = (_event, date) => {
      setDate(date);
      if (!withDoneConfirmButtonIos) {
        onDateChange(date || selectedDate);
      }
    };

    // On Change handler for Android
    const onChangeAndroid = (_event, date) => {
      // Weird Android Implementation
      // See: https://github.com/react-native-datetimepicker/datetimepicker#basic-usage-with-state
      setIsOpen(false);
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

    // iOS only method
    const onPressDone = () => {
      onDateChange(date || selectedDate);
      hidePicker();
    };

    const isAndroid: boolean = DeviceUtils.isAndroid();
    const isIos: boolean = DeviceUtils.isIos();

    React.useEffect(() => {
      if (isIos) {
        setDate(selectedDate);
      }
    }, [isOpen]);

    return (
      <React.Fragment>
        {label && (
          <StyledLabel
            weight="bold"
            $isSmallFont={isUnderlined}
            muted={isUnderlined}>
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
            {...rest}
            display="spinner"
            value={selectedDate}
            onChange={onChangeAndroid}
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
            {withDoneConfirmButtonIos && (
              <StyledTouchable1 onPress={onPressDone}>
                <Text>Done</Text>
              </StyledTouchable1>
            )}
            <DateTimePicker
              {...rest}
              display="spinner"
              value={date}
              onChange={onChangeIos}
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
