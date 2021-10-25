// Modules
import React from 'react';
import {ViewProps} from 'react-native';

// Button Group Props
export interface IButtonGroupProps {
  Item?: React.FC;
}

// Button Group Item Props
export interface IButtonGroupItemProps extends ViewProps {
  hasRightMargin: boolean;
  hasLeftMargin: boolean;
}

// IProps
export interface IProps {
  children: Array<React.ReactElement>;
}
