import type { PropsWithChildren } from 'react';
import Sidebar from '../../slots/Sidebar';

import React from 'react';

const SidebarLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default SidebarLayout;
