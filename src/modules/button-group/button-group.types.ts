// Modules
import * as React from 'react';

// Button Group Props
export interface IButtonGroupProps {
  Item?: React.FC;
}

// Button Group Item Props
export interface IButtonGroupItemProps {
  $hasRightMargin: boolean;
  $hasLeftMargin: boolean;
}

// IProps
export interface IProps {
  children: unknown;
}
