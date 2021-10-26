// Modules
import React from 'react';

// Props
export interface IProps {
  inversed?: boolean;
  alignment?: 'left' | 'center' | 'right';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}
