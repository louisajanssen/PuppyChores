import * as React from "react";
import { ChoiceGroup, IChoiceGroupOption, TextField, getTheme, Stack, IStackStyles, IStackTokens, IStackItemStyles, DefaultPalette, Text, Icon } from '@fluentui/react';

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
  
  export const Allergies: React.FC = () => {
  
    return (
      <Stack horizontal styles={stackStyles} tokens={itemAlignmentsStackTokens}>
          <Stack.Item styles={mainStackItemStyles}>
            <div style={nextDivStyles}>
              <Stack.Item align="center" grow={2} styles={stackItemStyles}>
                <Text variant="xLarge">ALLERGIES</Text>
                <span style={{ paddingLeft: '5px'}}>
                    <Icon iconName="Edit"/>
                </span>
              </Stack.Item>
              <TextField label="Allergy:" placeholder="Chicken, Cucumbers"/>
              <ChoiceGroup defaultSelectedKey="A" options={options} label="Severity"/>
            </div>
          </Stack.Item>
      </Stack>
    );
  }