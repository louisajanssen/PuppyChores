import * as React from "react";
import { ChoiceGroup, IChoiceGroupOption, TextField, getTheme, Stack, IStackStyles, IStackTokens, IStackItemStyles, DefaultPalette, Text, DefaultButton, IIconProps} from '@fluentui/react';

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

  
  export const Allergies: React.FC = () => {
  
    return (
      <Stack horizontal styles={stackStyles} tokens={itemAlignmentsStackTokens}>
          <Stack.Item styles={mainStackItemStyles}>
            <div style={nextDivStyles}>
              <Stack.Item align="center" grow={2} styles={stackItemStyles}>
                <Text variant="xLarge">ALLERGIES</Text>
              </Stack.Item>
              <TextField label="Allergy:" placeholder="Chicken"/>
              <ChoiceGroup defaultSelectedKey="B" options={options} label="Severity"/>
              <p style={{paddingTop: '10px'}}>
              <DefaultButton
                text="Add Allergy"
                iconProps={addIcon} />
              </p>
            </div>
          </Stack.Item>
      </Stack>
    );
  }