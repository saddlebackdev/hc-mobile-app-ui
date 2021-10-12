// Modules
import React from 'react';

// Props
export interface IProps {
  isMuted?: boolean;
  isSubtitle?: boolean;
  isCaption?: boolean;
  alignment?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}
