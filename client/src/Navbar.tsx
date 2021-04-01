import * as React from 'react';
import { CommandBar, ICommandBarItemProps, Text } from '@fluentui/react';
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
        key: 'generalInfo',
        text: 'General Info',
        onClick: onGeneralInfoClicked,
        style: {background: '#d8d8d8', paddingTop: '10px'}
      },
      {
        key: 'health',
        text: "Puppy's Health",
        onClick: onHealthClicked,
        style: {background: '#d8d8d8', paddingTop: '10px'}
      },
      {
        key: 'chow',
        text: 'Chow Time',
        onClick: onChowClicked,
        style: {background: '#d8d8d8', paddingTop: '10px'}
      },
      {
        key: 'potty',
        text: 'Potty Tracker',
        onClick: onPottyClicked,
        style: {background: '#d8d8d8', paddingTop: '10px'}
      },
    ];
  

    return (
      <div style={{ display: 'flex', width: '100%', height: '50px', cursor: 'pointer', backgroundColor: '#d8d8d8'}}>
        <img style={{ paddingLeft: '10px' }} width="50" src="../images/dog.png"></img>
        <Text style={{paddingTop: '15px', paddingLeft: '10px', fontWeight: 'bold'}}variant="mediumPlus">PUPPY CHORES</Text>
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
    
