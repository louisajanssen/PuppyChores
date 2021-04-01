import * as React from "react";
import { TextField, getTheme, Stack, IStackStyles, IStackTokens, IStackItemStyles, DefaultPalette, Text, Toggle, DefaultButton, IIconProps } from '@fluentui/react';

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
  
  export const NextDue: React.FC = () => {
  
    return (
      <Stack horizontal styles={stackStyles} tokens={itemAlignmentsStackTokens}>
          <Stack.Item styles={mainStackItemStyles}>
            <div style={nextDivStyles}>
              <Stack.Item align="center" grow={2} styles={stackItemStyles}>
                <Text variant="xLarge">NEXT DUE</Text>
              </Stack.Item>
              <TextField label="Rabies:" placeholder="02/13/2022"/>
              <TextField label="Bordetella:" placeholder="10/25/2021"/>
              <TextField label="DHLPP:" placeholder="10/25/2021"/>
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
                  iconProps={editIcon} />
                </Stack.Item>
              </p>
              </Stack>
            </div>
          </Stack.Item>
      </Stack>
    );
  }