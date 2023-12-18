import * as React from 'react';

export interface DividerProps {
  children?: React.ReactNode;
  className?: string;
  dashed?: boolean;
  orientation?: 'left' | 'right' | 'center';
  orientationMargin?: string | number;
  plain?: boolean;
  type?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
}

const Divider: React.FC<DividerProps> = (props) => {
  const { type = 'horizontal', orientation = 'center',
  orientationMargin,
  className,
  children,
  dashed,
  plain,
  style,
  ...restProps
 } = props;
  return <></>;
};
export default Divider;
