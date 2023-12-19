// import { createStyles } from 'antd-style';
import { useSidebarData } from 'dumi';

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
  const sidebarData = useSidebarData();
  console.log(sidebarData);
  const { isMobile, theme } = useContext(SiteContext);
  // let navigate = useNavigate();
  // const handleClick = (link) => {
  //   navigate(link);
  // };
  // const menuChild = sidebarData.map((item) => {
  //   return item.children.map((items) => {
  //     return (
  //       <div
  //         onClick={() => {
  //           handleClick(items.link);
  //         }}
  //       >
  //         {items.title}
  //       </div>
  //     );
  //   });
  // });
  return isMobile ? <div></div> : <section> 
    
  </section>;
};
export default Sidebar;
