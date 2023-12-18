import classNames from 'classnames';
import * as React from 'react';

import type { Breakpoint } from '../_util/responsiveObserver';
const RowAligns = ['top', 'middle', 'bottom', 'stretch'] as const;
const RowJustify = [
  'start',
  'end',
  'center',
  'space-around',
  'space-between',
  'space-evenly',
] as const;

type Responsive = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type ResponsiveLike<T> = {
  [key in Responsive]?: T;
};
type ResponsiveAligns = ResponsiveLike<(typeof RowAligns)[number]>;
type ResponsiveJustify = ResponsiveLike<(typeof RowJustify)[number]>;

export type Gutter = number | undefined | Partial<Record<Breakpoint, number>>;
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter | [Gutter, Gutter];
  align?: (typeof RowAligns)[number] | ResponsiveAligns;
  justify?: (typeof RowJustify)[number] | ResponsiveJustify;
  // prefixCls?: string;
  wrap?: boolean;
}

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const {
    // prefixCls,
    justify,
    align,
    className,
    style,
    children,
    gutter = 0,
    wrap,
    // ...others
  } = props;

  const classes = classNames(className);
  return <div className={classes}>{children}</div>;
});

export default Row;
