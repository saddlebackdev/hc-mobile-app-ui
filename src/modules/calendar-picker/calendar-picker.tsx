// Modules
import * as React from 'react';
import RNCalendarPicker from 'react-native-calendar-picker';

// Types
import {IProps} from './calendar-picker.types';

// Theme
import {defaultTheme} from '../theming/default-theme';

// Shared
import Icon from '../icon/icon';

// Component
export const CalendarPicker: React.FC<IProps> = React.memo(
  ({onDateChange, ...props}): React.ReactElement => (
    <RNCalendarPicker
      selectedDayColor={defaultTheme.colors.primaryLight}
      selectedDayTextColor={defaultTheme.colors.white}
      todayBackgroundColor={defaultTheme.colors.grayTwo}
      todayTextStyle={{color: defaultTheme.colors.black}}
      nextComponent={<Icon size={18} type="chevronRight" />}
      previousComponent={<Icon size={18} type="chevronLeft" />}
      onDateChange={onDateChange}
      dayLabelsWrapper={{
        borderBottomWidth: 0,
        borderTopWidth: 0,
      }}
      {...props}
    />
  ),
);

// Exports
export default CalendarPicker;
