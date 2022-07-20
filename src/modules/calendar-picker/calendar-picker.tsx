// Modules
import * as React from 'react';
import {IconChevronLeft, IconChevronRight} from 'hc-app-icons';
import RNCalendarPicker from 'react-native-calendar-picker';

// Types
import {IProps} from './calendar-picker.types';

// Theme
import {defaultTheme} from '../theming/default-theme';

// Shared
import Icon from '../icon/icon-external';

// Component
export const CalendarPicker: React.FC<IProps> = React.memo(
  ({onDateChange, ...props}): React.ReactElement => (
    <RNCalendarPicker
      selectedDayColor={defaultTheme.colors.primaryLight}
      selectedDayTextColor={defaultTheme.colors.white}
      todayBackgroundColor={defaultTheme.colors.grayTwo}
      todayTextStyle={{color: defaultTheme.colors.black}}
      nextComponent={<Icon size={16} file={IconChevronRight} />}
      previousComponent={<Icon size={16} file={IconChevronLeft} />}
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
