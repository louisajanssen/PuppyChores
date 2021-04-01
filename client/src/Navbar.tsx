import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';
import { Sidemenu } from './SideMenu';

interface IProps {
    onGeneralInfoClicked: () => void
    onHealthClicked: () => void
    onChowClicked: () => void
    onPottyClicked: () => void
    }
 

export const Navbar: React.FC<IProps> = ({ onGeneralInfoClicked, onHealthClicked, onChowClicked, onPottyClicked }: IProps) => {

    const _items: ICommandBarItemProps[] = [
      {
        key: 'puppy',
        text: 'PUPPY CHORES',
        style: {background: '#d8d8d8'}
      },

      {
        key: 'generalInfo',
        text: 'General Info',
        onClick: onGeneralInfoClicked,
        style: {background: '#d8d8d8'}
      },
      {
        key: 'health',
        text: 'Puppys Health',
        onClick: onHealthClicked,
        style: {background: '#d8d8d8'}
      },
      {
        key: 'chow',
        text: 'Chow Time',
        onClick: onChowClicked,
        style: {background: '#d8d8d8'}
      },
      {
        key: 'potty',
        text: 'Potty Tracker',
        onClick: onPottyClicked,
        style: {background: '#d8d8d8'}
      },
    ];
    
    
    // const _farItems: ICommandBarItemProps[] = [
    //   {
    //     key: 'info',
    //     text: 'Info',
    //     // This needs an ariaLabel since it's icon-only
    //     ariaLabel: 'Info',
    //   },
    // ];

    return (
      <div style={{ display: 'flex', width: '100%', height: '50px', cursor: 'pointer', backgroundColor: '#d8d8d8'}}>
        <img style={{ paddingRight: '10px', }} width="50" src="../images/dog.png"></img>
        <div style={{ flexGrow: 1 }}>
          <CommandBar
            styles={{root: {background: '#d8d8d8'}}}
            items={_items}
            ariaLabel="Use left and right arrow keys to navigate between commands"
          />
        </div>
          <Sidemenu />
      </div>
      );
    };
    
