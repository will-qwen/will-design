// import { createStyles } from 'antd-style';
import { useNavigate, useSidebarData } from 'dumi';
import React, { useContext } from 'react';

import SiteContext from '../SiteContext';
// const useStyles = createStyles(({ token, css }) => ({
//   container: {
//     maxWidth: 400,
//     width: '100%',
//     height: 180,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//   },
// }));
const Sidebar: React.FC = () => {
  // const { styles } = useStyles();

  const { isMobile, theme } = useContext(SiteContext);
  const sidebarData = useSidebarData();
  let navigate = useNavigate();

  console.log(sidebarData);
  const handleClick = (link) => {
    navigate(link);
  };

  // const menuChild = sidebarData.map((item) => {
  //   return <div>{item.title}</div>;
  //   // return item.children.map((items) => {
  //   //   return (
  //   //     <div
  //   //       onClick={() => {
  //   //         handleClick(items.link);
  //   //       }}
  //   //     >
  //   //       {items.title}
  //   //     </div>
  //   //   );
  //   // });
  // });
  return isMobile ? <div></div> : <section> </section>;
};
export default Sidebar;
