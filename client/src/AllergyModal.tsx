import * as React from "react";
import { TextField, getTheme, ChoiceGroup, IChoiceGroupOption, DefaultButton, IIconProps } from '@fluentui/react';

  const theme = getTheme();

  const mainDivStyles = {
    boxShadow: theme.effects.elevation8,
    width: 600,
    padding: 25,
    align: 'center'
  }

  const options: IChoiceGroupOption[] = [
    { key: 'A', text: 'Mild' },
    { key: 'B', text: 'Medium' },
    { key: 'C', text: 'Severe' },
  ];

  const saveIcon: IIconProps = {iconName: 'Save'}
  
  export const AllergyModal: React.FC = () => {

  
  
    return (
        <div style={mainDivStyles}>
        <TextField label="Allergy:" placeholder="What is your dog allergic to?"/>
        <ChoiceGroup defaultSelectedKey="B" options={options} label="Severity"/>
        <p style={{paddingTop: '10px'}}>
          <DefaultButton
            text="Save"
            iconProps={saveIcon} />
        </p>
      </div>
    );
  }