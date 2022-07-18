// Modules
import * as React from 'react';
import Styled from 'styled-components/native';
import Moment from 'moment';

// Types
import {IProps} from './reminder-picker.types';

// Shared
import {majorScale} from '../scales';
import CalendarPicker from '../calendar-picker/calendar-picker';
import SelectPicker from '../select-picker/select-picker';

// Styles
const StyledWrapper = Styled.View``;
const StyledCalendarPickerWrapper = Styled.View``;
const StyledSelectPickerWrapper = Styled.View`
  margin-bottom: ${majorScale(3)}px;
`;

const REMINDER_PICKER_VALUES = {
  ONE_DAY: 1,
  THREE_DAYS: 3,
  SEVEN_DAYS: 7,
  CUSTOM: 99,
};

// Component
export const ReminderPicker: React.FC<IProps> = React.memo(
  ({onChange, ...props}): React.ReactElement => {
    // State
    // prettier-ignore
    const [isCustomReminderSet, setIsCustomerReminderSet] = React.useState<boolean>(false);

    // On Change Reminder Date
    const onChangeReminderDate = timeSpan => {
      if (timeSpan === REMINDER_PICKER_VALUES.CUSTOM) {
        return setIsCustomerReminderSet(true);
      }

      setIsCustomerReminderSet(false);

      const reminderDate = Moment(new Date())
        .add(timeSpan, 'days')
        .format('YYYY-MM-DD');

      onChange(reminderDate);
    };

    // On Select Calendar Date
    const onSelectCalendarDate = date => {
      onChange(Moment(date).format('YYYY-MM-DD'));
    };

    return (
      <StyledWrapper>
        <StyledSelectPickerWrapper>
          <SelectPicker
            {...props}
            label="Set Reminder For"
            onValueChange={onChangeReminderDate}
            items={[
              {
                label: '1 Day',
                value: REMINDER_PICKER_VALUES.ONE_DAY,
              },
              {
                label: '3 Days',
                value: REMINDER_PICKER_VALUES.THREE_DAYS,
              },
              {
                label: '7 Days',
                value: REMINDER_PICKER_VALUES.SEVEN_DAYS,
              },
              {
                label: 'Custom',
                value: REMINDER_PICKER_VALUES.CUSTOM,
              },
            ]}
          />
        </StyledSelectPickerWrapper>

        {isCustomReminderSet && (
          <StyledCalendarPickerWrapper>
            <CalendarPicker
              minDate={new Date()}
              onDateChange={onSelectCalendarDate}
            />
          </StyledCalendarPickerWrapper>
        )}
      </StyledWrapper>
    );
  },
);

// Exports
export default ReminderPicker;
