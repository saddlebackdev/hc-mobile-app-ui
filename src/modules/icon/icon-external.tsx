// Modules
import * as React from 'react';

// Types
import {IProps} from './icon-external.types';

// Component
export const Icon: React.FC<IProps> = React.memo(
  ({
    file: Component,
    size = 24,
    color = 'black',
  }): React.ReactElement | null => {
    if (!Component) {
      return null;
    }

    return <Component width={size} height={size} fill={color} />;
  },
);

// Defaults
Icon.defaultProps = {
  testID: 'icon',
};

// Exports
export default Icon;
