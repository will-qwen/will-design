import classNames from 'classnames';
import React from 'react';
import Navigation from './Navigation';
import './index.css';
const Header: React.FC = () => {
  const headerClassName = classNames('header');
  let isMobile = false;
  const navigationNode = <Navigation
  ></Navigation>;
  let menu = [navigationNode];
  return <header className={headerClassName}>{!isMobile && navigationNode}</header>;
};
export default Header;
