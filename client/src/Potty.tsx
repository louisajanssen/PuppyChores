import * as React from "react";
import { useBoolean } from '@fluentui/react-hooks';
import { DefaultButton, DefaultPalette, IStackItemStyles, IStackStyles, IStackTokens, Dropdown, IDropdownStyles, IDropdownOption, Stack, Text, getTheme, mergeStyleSets, FontWeights, Modal, IconButton, IIconProps } from '@fluentui/react';
import { PottyCard } from "./PottyCard";
import { PottyCardModal } from "./PottyCardModal";

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
  },
};

const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'left',
    background: 'white',
    color: DefaultPalette.white,
    display: 'flex',
    height: 50,
    justifyContent: 'left',
    padding: 10
  },
};

// const stackItemDateStyles: IStackItemStyles = {
//   root: {
//     alignItems: 'center',
//     background: DefaultPalette.white,
//     color: DefaultPalette.black,
//     display: 'flex',
//     height: 10,
//     justifyContent: 'center',
//   },
// };

// const divStyles = {
//   paddingTop: 20
// }

const selectWeekStyles = {
  paddingLeft: 30
}

const textStyles = {
  padding:10
}

const spanStyle = {
  paddingLeft: 550
}


const stackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};

const cancelIcon: IIconProps = { iconName: 'Cancel' };
  
  export const Potty = () => {
    const [weekRender, setWeekRender] = React.useState('')
    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  
  
    const options: IDropdownOption[] = [
      {key:"Week1", text:"Week 03/28/2021 to 04/03/2021"},
      {key:"Week2", text:"Week 04/04/2021 to 04/10/2021"},
    ]

    const onWeekClick = () => {
      setWeekRender('Week1')
    }
  

    if(weekRender === 'Week1') {
      return (
        <div>
            <div style={selectWeekStyles}>
              <Text style={textStyles} variant="large">Week 03/28/2021 to 04/03/2021</Text>
              <Stack styles={stackStyles} tokens={stackTokens}>
                <Stack.Item styles={stackItemStyles}>
                  <Dropdown
                    placeholder="Select an option"
                    label="Select Week"
                    options={options}
                    styles={dropdownStyles}
      
                  />
                  <span style={spanStyle}>
                    <DefaultButton styles={iconButtonStyles} onClick={showModal} text="Add Potty Moment" />
                  </span>
                </Stack.Item>
              </Stack>
            </div>
            <PottyCard />
            <div>
              <Modal
                isOpen={isModalOpen}
                onDismiss={hideModal}
                isBlocking={false}
                containerClassName={contentStyles.container}
              >
                <div className={contentStyles.header}>
                  <span>Add Potty Moment</span>
                  <IconButton
                    styles={iconButtonStyles}
                    iconProps={cancelIcon}
                    ariaLabel="Close popup modal"
                    onClick={hideModal}
                  />
                </div>
                <div className={contentStyles.body}>
                  <div><PottyCardModal /></div>
                </div>
              </Modal>
          </div>
        </div>
        
      );
    }
    else {
      return (
        <div style={selectWeekStyles}>
            <Text style={textStyles} variant="xLarge">POTTY TRACKER</Text>
            <Stack style={textStyles}>
              <Dropdown
                placeholder="Select an option"
                label="Select Week"
                options={options}
                styles={dropdownStyles}
                onChange={onWeekClick}
              />
            </Stack>
        </div>
      );
    }
  }

  const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'stretch',
  },
  header: [
    // eslint-disable-next-line deprecation/deprecation
    theme.fonts.xLarge,
    {
      flex: '1 1 auto',
      borderTop: `4px solid #134018`,
      color: theme.palette.neutralPrimary,
      display: 'flex',
      alignItems: 'center',
      fontWeight: FontWeights.semibold,
      padding: '12px 12px 14px 24px',
    },
  ],
  body: {
    flex: '4 4 auto',
    padding: '0 24px 24px 24px',
    overflowY: 'hidden',
    selectors: {
      p: { margin: '14px 0' },
      'p:first-child': { marginTop: 0 },
      'p:last-child': { marginBottom: 0 },
    },
  },
});
const iconButtonStyles = {
  root: {
    backgroundColor: '#073920',
    color: 'white',
    marginLeft: 'auto',
    marginTop: '4px',
    marginRight: '2px',
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
