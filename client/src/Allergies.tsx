import * as React from "react";
import { useBoolean } from '@fluentui/react-hooks';
import { ChoiceGroup, IChoiceGroupOption, Modal, FontWeights, mergeStyleSets, IconButton, getTheme, Stack, IStackStyles, IStackTokens, IStackItemStyles, DefaultPalette, Text, DefaultButton, IIconProps} from '@fluentui/react';
import { AllergyModal } from "./AllergyModal";

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

const options: IChoiceGroupOption[] = [
    { key: 'A', text: 'Mild' },
    { key: 'B', text: 'Medium' },
    { key: 'C', text: 'Severe' },
  ];
  const addIcon: IIconProps = { iconName: 'Add' };
  const cancelIcon: IIconProps = { iconName: 'Cancel' };

  export const Allergies: React.FC = () => {

    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  
    return (
      <Stack horizontal styles={stackStyles} tokens={itemAlignmentsStackTokens}>
          <Stack.Item styles={mainStackItemStyles}>
            <div style={nextDivStyles}>
              <Stack.Item align="center" grow={2} styles={stackItemStyles}>
                <Text variant="xLarge">ALLERGIES</Text>
              </Stack.Item>
              <p className="category">Allergy:</p>
              <p className="textOutline">Chicken</p>
              <ChoiceGroup defaultSelectedKey="B" options={options} label="Severity"/>
              <p style={{paddingTop: '10px'}}>
              <DefaultButton
                text="Add Allergy"
                iconProps={addIcon}
                onClick={showModal} />
              </p>
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
                  <span style={{paddingLeft: '20px'}}>Add another allergy</span>
                  <IconButton
                    styles={iconButtonStyles}
                    iconProps={cancelIcon}
                    ariaLabel="Close popup modal"
                    onClick={hideModal}
                  />
                </div>
                <div className={contentStyles.body}>
                  <div><AllergyModal /></div>
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