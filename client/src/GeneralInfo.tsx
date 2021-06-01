import * as React from "react";
import { getTheme, Stack, IStackStyles, IStackTokens, IStackItemStyles, DefaultPalette, Text, DefaultButton, IIconProps } from '@fluentui/react';

const theme = getTheme();

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
    paddingTop: 80
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
      padding: 5,
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

const styledImg = {
  borderRadius: 100,
  paddingReft: 40
}

const textStyles = {
  color: '#073920'
}
const editIcon: IIconProps = {iconName: 'Edit'}
  
  export const GeneralInfo: React.FC = () => {
  
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
            <p className="generalInfoMainP">
              <span className="generalInfoCategory">Breed:</span>
              <span className="generalInfoText">Mini Australian Shepherd</span>
            </p>
            <p className="generalInfoMainP">
              <span className="generalInfoCategory">Birthday:</span>
              <span className="generalInfoText">10/27/2017</span>
            </p>
            <p className="generalInfoMainP">
              <span className="generalInfoCategory">Food:</span>
              <span className="generalInfoText">Royal Canine</span>
            </p>
            <p className="generalInfoMainP">
              <span className="generalInfoCategory">Favorite Treats:</span>
              <span className="generalInfoText">Carrot, Salmon, Cheese</span>
            </p>
            <p className="generalInfoMainP">
              <span className="generalInfoCategory">Vet Info:</span>
              <span className="generalInfoText">Eastside Vet Associates</span>
            </p>
            <p style={{paddingTop: '10px'}}>
              <DefaultButton
                text="Edit"
                iconProps={editIcon} />
            </p>
          </div>
          </Stack.Item>
        </Stack>
    );
  }