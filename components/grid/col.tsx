import * as React from 'react';

type LiteralUnion<T extends String> = T | (string & {});
type FlexType = number | LiteralUnion<'none' | 'auto'>;

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  flex?: FlexType;
  offset?: number;
  order?: FlexType;
  pull?: FlexType;
  push?: FlexType;
  span?: FlexType;
  xs?: FlexType;
  sm?: FlexType;
  md?: FlexType;
  lg?: FlexType;
  xl?: FlexType;
  xxl?: FlexType;
}

const Col = React.forwardRef<ColProps, HTMLDivElement>((props, ref) => {
  return <></>;
});

export default Col;
