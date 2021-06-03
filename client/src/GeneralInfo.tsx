import * as React from "react";
import { useBoolean } from '@fluentui/react-hooks';
import { getTheme, mergeStyleSets, Stack, FontWeights, IStackStyles, IconButton, IStackTokens, IStackItemStyles, DefaultPalette, Text, DefaultButton, IIconProps, Modal } from '@fluentui/react';
import { GeneralInfoModal } from "./GeneralInfoModal";

const theme = getTheme();

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
    paddingTop: 30,
    align: "center",
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
const imgStackItemStyles: IStackItemStyles ={
  root: {
    background: DefaultPalette.white,
    color: DefaultPalette.black,
    padding: 5,
  },
}
const mainStackItemStyles: IStackItemStyles ={
  root: {
      background: DefaultPalette.white,
      color: DefaultPalette.black,
      padding: 2,
    },
}
// const stackTokens: IStackTokens = {
//   childrenGap: 5,
//   padding: 10,
// };
const itemAlignmentsStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

const mainDivStyles = {
  boxShadow: theme.effects.elevation64,
  width: 600,
  padding: 25,
  align: 'center'
}

const genDivStyles = {
  width: 600,
  align: 'center',
}

const styledImg = {
  borderRadius: 100,
}

const textStyles = {
  color: '#073920'
}
const editIcon: IIconProps = {iconName: 'Edit'}
const cancelIcon: IIconProps = { iconName: 'Cancel' };
  
  export const GeneralInfo: React.FC = () => {

    const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] = useBoolean(false);
  
    return (
      <Stack styles={stackStyles} tokens={itemAlignmentsStackTokens}>
          <Stack.Item align="center" styles={mainStackItemStyles}>
          <div style={mainDivStyles}>
            <Stack.Item align="start" grow={2} styles={imgStackItemStyles}>
              <img style={styledImg} width="100" src="../images/Miko2.jpg"></img>
            </Stack.Item>
            <Stack.Item align="center" grow={2} styles={stackItemStyles}>
              <Text variant="xLarge" style={textStyles} >MIKO | 3 years old</Text>
            </Stack.Item>
            <div style={genDivStyles}>
              <p className="category">Breed:</p>
              <p className="textOutline">Mini Australian Shepherd</p>
              <p className="category">Birthday:</p>
              <p className="textOutline">10/27/2017</p>
              <p className="category">Food:</p>
              <p className="textOutline">Royal Canine</p>
              <p className="category">Favorite Treats:</p>
              <p className="textOutline">Carrot, Salmon, Cheese</p>
              <p className="category">Vet Info:</p>
              <p className="textOutline">Eastside Vet Associates</p>
              <p style={{paddingTop: '10px'}}>
                <DefaultButton
                  text="Edit"
                  iconProps={editIcon}
                  onClick={showModal} />
              </p>
            </div>
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
                  <span style={{paddingLeft: '20px'}}>Edit your Puppy's general info</span>
                  <IconButton
                    styles={iconButtonStyles}
                    iconProps={cancelIcon}
                    ariaLabel="Close popup modal"
                    onClick={hideModal}
                  />
                </div>
                <div className={contentStyles.body}>
                  <div><GeneralInfoModal /></div>
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