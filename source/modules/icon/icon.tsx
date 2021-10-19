// Modules
import React from 'react';
import {useTheme} from 'styled-components/native';

// Types
import {IProps} from './icon.types';

// Icons
import IconChevronDown from './images/chevron-down.svg';
import IconCalendar from './images/calendar.svg';

// Icons
const IconFiles = {
  chevronDown: IconChevronDown,
  calendar: IconCalendar,
  date: IconCalendar,
};

// Component
export const Icon: React.FC<IProps> = ({
  color,
  size = 24,
  type,
}): React.ReactElement => {
  // Hooks
  const theme = useTheme();

  const IconComponent = IconFiles[type];

  let iconColor;

  switch (color) {
    case 'primary': {
      iconColor = theme.colors.primaryLight;
      break;
    }
    case 'secondary': {
      iconColor = theme.colors.secondaryLight;
      break;
    }
    case 'info': {
      iconColor = theme.colors.infoLight;
      break;
    }
    case 'success': {
      iconColor = theme.colors.successLight;
      break;
    }
    case 'warning': {
      iconColor = theme.colors.warningLight;
      break;
    }
    case 'danger': {
      iconColor = theme.colors.dangerLight;
      break;
    }
    case 'muted': {
      iconColor = theme.colors.grayFour;
      break;
    }
    case 'white': {
      iconColor = theme.colors.white;
      break;
    }
    default: {
      iconColor = theme.colors.graySix;
    }
  }

  return <IconComponent fill={iconColor} width={size} height={size} />;
};

// Exports
export default React.memo(Icon);
