import * as React from "react";
import { Day } from './Date'
import { Dropdown, IDropdownOption, IDropdownStyles, ChoiceGroup, IChoiceGroupOption, TextField, Toggle, Text, DefaultPalette, Stack, IStackStyles, IStackTokens, IStackItemStyles, getTheme, DefaultButton, IIconProps } from '@fluentui/react';

// Styles definition
const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.white,
    },
  };
  const stackItemStyles: IStackItemStyles = {
    root: {
      alignItems: 'center',
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
  const theme = getTheme();

  const mainDivStyles = {
    boxShadow: theme.effects.elevation8,
    width: 600,
    padding: 25,
    align: 'center'
  }

  const divStyles = {
      padding: 10
  }
  
  // Tokens definition
  const stackTokens: IStackTokens = {
    childrenGap: 5,
    padding: 10,
  };

    const dropdownStyles: Partial<IDropdownStyles> = {
        dropdown: { width: 200 },
    };

  const itemAlignmentsStackTokens: IStackTokens = {
    childrenGap: 5,
    padding: 10,
  };
  const saveIcon: IIconProps = {iconName: 'Save'}
  
  export const PottyCardModal: React.FC = () => {

    const optionsDrop: IDropdownOption[] = [
        { key: 'One', text: 'I went Number 1!'},
        { key: 'Two', text: 'I went Number 2' },
      ];

    const options: IChoiceGroupOption[] = [
        { key: 'A', text: 'A little' },
        { key: 'B', text: 'Normal' },
        { key: 'C', text: 'A lot' },
      ];
  
  
    return (
      <div>
        <Stack styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item align="center" styles={mainStackItemStyles}>
            <div style={mainDivStyles}>
            <Stack horizontal styles={stackStyles} tokens={stackTokens}>
                <Stack.Item grow={2} styles={stackItemStyles}>
                    <img src="https://img.icons8.com/ios/50/000000/dog-pee.png"/>
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                    <Dropdown
                    placeholder="I went Number 1!"
                    styles={dropdownStyles}
                    options={optionsDrop}
                    />
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                    <Text variant="medium">at</Text>
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                    <Day />
                </Stack.Item>
            </Stack>
            <div style={divStyles}>
                <ChoiceGroup defaultSelectedKey="B" options={options} label="Amount"/>
                <TextField label="Notes"></TextField>
            </div>
            <Stack horizontal styles={stackStyles} tokens={stackTokens}>
                <Stack.Item grow={2} styles={stackItemStyles}>
                    <Toggle onText="Oops! This was an accident." offText="This was not an accident."/>
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                <p style={{paddingTop: '10px'}}>
                  <DefaultButton
                    text="Save"
                    iconProps={saveIcon} />
                </p>
                </Stack.Item>
            </Stack>
            </div>
        </Stack.Item>
        </Stack>
      </div>
    );
  }