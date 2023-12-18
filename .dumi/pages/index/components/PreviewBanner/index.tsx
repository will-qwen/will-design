
import React from 'react';
import SiteContext from '../../../../theme/slots/SiteContext';
import { GroupMask } from '../Group';

// console.log(createStyles);
// const useStyle = () => {
//   return createStyles(({ token, css }) => {
//     return {};
//   })();
// };
export interface PreviewBannerProps {
  children?: React.ReactNode;
}

export default function PreviewBanner(props: PreviewBannerProps) {
  const { children } = props;
  const { isMobile } = React.useContext(SiteContext);
  // const { styles } = useStyle();

  return (
    <>
      <GroupMask>
        <img
          style={{
            position: 'absolute',
            left: isMobile ? -120 : 0,
            top: 0,
            width: 240,
          }}
          src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
          alt="bg"
        />
        <img
          style={{
            position: 'absolute',
            right: isMobile ? 0 : '40%',
            bottom: 120,
            width: 240,
          }}
          src="https://gw.alipayobjects.com/zos/bmw-prod/e152223c-bcae-4913-8938-54fda9efe330.svg"
          alt="bg"
        />
      </GroupMask>
    </>
  );
}
