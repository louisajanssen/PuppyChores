import * as React from 'react';
import { IContextualMenuProps, DefaultButton } from '@fluentui/react';
import { useConst} from '@fluentui/react-hooks';

export const Sidemenu: React.FunctionComponent = () => {
    const menuProps = useConst<IContextualMenuProps>(() => ({
      shouldFocusOnMount: true,
      items: [
        {
          key: 'Miko',
          iconProps: { iconName: 'Emoji2' },
          text: 'Miko',
        },
        {
          key: 'Tomorrow',
          iconProps: { iconName: 'CirclePLus' },
          text: 'Add Dog'
        },
        {
          key: 'Share',
          iconProps: { iconName: 'Share' },
          text: "Share Miko's Profile"
        },
      ],
    }));
    return <span style={{paddingTop: '8px'}}><DefaultButton style={{ background:'#d8d8d8' }}text="Hi there, Miko!" menuProps={menuProps} /></span>;
  };