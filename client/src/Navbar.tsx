import * as React from 'react';
import { CommandBar, ICommandBarItemProps } from '@fluentui/react';

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
      },

      {
        key: 'generalInfo',
        text: 'General Info',
        onClick: onGeneralInfoClicked
      },
      {
        key: 'health',
        text: 'Puppys Health',
        onClick: onHealthClicked
      },
      {
        key: 'chow',
        text: 'Chow Time',
        onClick: onChowClicked
      },
      {
        key: 'potty',
        text: 'Potty Tracker',
        onClick: onPottyClicked
      },
    ];
    
    
    const _farItems: ICommandBarItemProps[] = [
      {
        key: 'info',
        text: 'Info',
        // This needs an ariaLabel since it's icon-only
        ariaLabel: 'Info',
      },
    ];

    return (
        <div>
          <CommandBar
            items={_items}
            farItems={_farItems}
            ariaLabel="Use left and right arrow keys to navigate between commands"
          />
        </div>
      );
    };
    
