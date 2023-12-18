import { useOutlet } from 'dumi';
import React, { useMemo } from 'react';
import Header from '../../slots/Header';
import SidebarLayout from '../SidebarLayout';

const DocLayout: React.FC = () => {
  const outlet = useOutlet();

  console.log(outlet);
  const content = useMemo(() => {
    return <SidebarLayout> {outlet}</SidebarLayout>;
  }, [outlet]);
  return (
    <>
      <Header></Header>
      {content}
    </>
  );
};

export default DocLayout;
