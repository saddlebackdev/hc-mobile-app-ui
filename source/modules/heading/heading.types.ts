// Modules
import React from 'react';

// Props
export interface IProps {
  alignment?: 'left' | 'center' | 'right';
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
}
