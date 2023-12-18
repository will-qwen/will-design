import * as React from 'react';

export type DirectionType = 'ltr' | 'rtl' | undefined;

const defaultGetPrefixCls = function () {};
export const ConfigContext = React.createContext({
  getPrefixCls: defaultGetPrefixCls,
});
