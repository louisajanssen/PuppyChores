import * as React from "react";
import { TextField, DefaultPalette, getTheme, Stack, IStackStyles, IStackTokens, IStackItemStyles, DefaultButton, IIconProps } from '@fluentui/react';

// Styles definition
const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.white,
    },
  };
//   const stackItemStyles: IStackItemStyles = {
//     root: {
//       alignItems: 'center',
//       background: DefaultPalette.white,
//       color: DefaultPalette.black,
//       display: 'flex',
//       height: 50,
//       justifyContent: 'center',
//     },
//   };
  const mainStackItemStyles: IStackItemStyles ={
    root: {
        background: DefaultPalette.white,
        color: DefaultPalette.black,
        padding: 5,
      },
  }
  const theme = getTheme();

  const mainDivStyles = {
    boxShadow: theme.effects.elevation8,
    width: 600,
    padding: 25,
    align: 'center'
  }

  const itemAlignmentsStackTokens: IStackTokens = {
    childrenGap: 5,
    padding: 10,
  };

  const saveIcon: IIconProps = {iconName: 'Save'}
  
  export const GeneralInfoModal: React.FC = () => {

  
  
    return (
      <div style={mainDivStyles}>
        <Stack styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item align="center" styles={mainStackItemStyles}>
            </Stack.Item>
            <TextField label="Name:" placeholder="What is your dog's name?"/>
            <TextField label="Age:" placeholder="How old is your dog?"/>
            <TextField label="Breed:" placeholder="Your dog's breed"/>
            <TextField label="Birthday:" placeholder="Your dog's birthday"/>
            <TextField label="Food:" placeholder="Your dog's food"/>
            <TextField label="Favorite Treats:" placeholder="What are your dog's favorite treats?"/>
            <TextField label="Vet:" placeholder="Your dogs Vet"/>
            <p style={{paddingTop: '10px'}}>
              <DefaultButton
                text="Save"
                iconProps={saveIcon} />
            </p>
        </Stack>
      </div>
    );
  }