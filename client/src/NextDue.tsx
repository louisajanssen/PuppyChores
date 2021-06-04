import * as React from "react";
import { useBoolean } from '@fluentui/react-hooks';
import { Modal, getTheme, mergeStyleSets, FontWeights, IconButton, Stack, IStackStyles, IStackTokens, IStackItemStyles, DefaultPalette, Text, Toggle, DefaultButton, IIconProps } from '@fluentui/react';
import { NextDueModal } from "./NextDueModal";

const theme = getTheme();

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white
  },
};
const stackItemStyles: IStackItemStyles = {
  root: {
    background: DefaultPalette.white,
    color: DefaultPalette.black,
    display: 'flex',
    height: 50,
    justifyContent: 'center',
  },
};

const mainStackItemStyles: IStackItemStyles ={
  root: {
      background: DefaultPalette.white,
      color: DefaultPalette.black,
      padding: 5,
    },
}

const itemAlignmentsStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

const nextDivStyles = {
  boxShadow: theme.effects.elevation16,
  padding: 25,
  width: 300,
  align: 'center'
}
const editIcon: IIconProps = {iconName: 'Edit'}
const cancelIcon: IIconProps = { iconName: 'Cancel' };

  
  export const NextDue: React.FC = () => {

    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  
    return (
      <Stack horizontal styles={stackStyles} tokens={itemAlignmentsStackTokens}>
          <Stack.Item styles={mainStackItemStyles}>
            <div style={nextDivStyles}>
              <Stack.Item align="center" grow={2} styles={stackItemStyles}>
                <Text variant="xLarge">NEXT DUE</Text>
              </Stack.Item>
              <p className="category">Rabies:</p>
              <p className="textOutline">2/13/2022</p>
              <p className="category">Bordetella:</p>
              <p className="textOutline">10/25/2021</p>
              <p className="category">DHLPP:</p>
              <p className="textOutline">10/25/2021</p>
              <Stack horizontal styles={stackStyles} tokens={itemAlignmentsStackTokens}>
                <p style={{ paddingTop: '20px'}}>
                  <Stack.Item grow={2} styles={stackItemStyles}>
                      <Toggle onText="Pause reminders." offText="Set reminders."/>
                  </Stack.Item>
                </p>
                <p style={{paddingTop: '10px', paddingLeft: '10px'}}>
                <Stack.Item grow={2} styles={stackItemStyles}>
                <DefaultButton
                  text="Edit"
                  iconProps={editIcon}
                  onClick={showModal} />
                </Stack.Item>
              </p>
              </Stack>
            </div>
          </Stack.Item>
          <div>
              <Modal
                isOpen={isModalOpen}
                onDismiss={hideModal}
                isBlocking={false}
                containerClassName={contentStyles.container}
              >
                <div className={contentStyles.header}>
                  <span style={{paddingLeft: '20px'}}>Edit your Puppy's next due vaccines</span>
                  <IconButton
                    styles={iconButtonStyles}
                    iconProps={cancelIcon}
                    ariaLabel="Close popup modal"
                    onClick={hideModal}
                  />
                </div>
                <div className={contentStyles.body}>
                  <div><NextDueModal /></div>
                </div>
              </Modal>
          </div>
      </Stack>
    );
  }

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