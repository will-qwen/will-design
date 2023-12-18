import * as React from 'react';

export interface GroupMaskProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
}
export function GroupMask({ children, style, disabled }: GroupMaskProps) {
  return <>{children}</>;
}
