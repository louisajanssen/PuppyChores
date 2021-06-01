import * as React from "react";
import { TextField, getTheme, DefaultButton, IIconProps } from '@fluentui/react';

  const theme = getTheme();

  const mainDivStyles = {
    boxShadow: theme.effects.elevation8,
    width: 600,
    padding: 25,
    align: 'center'
  }


  const saveIcon: IIconProps = {iconName: 'Save'}
  
  export const VaccinationModal: React.FC = () => {

  
  
    return (
        <div style={mainDivStyles}>
        <TextField label="Distemper:" placeholder="Date of last vaccine (dd/mm/yyyy)"/>
        <TextField label="Parvovirus:" placeholder="Date of last vaccine (dd/mm/yyyy)"/>
        <TextField label="Adenovirus:" placeholder="Date of last vaccine (dd/mm/yyyy)"/>
        <TextField label="Rabies:" placeholder="Date of last vaccine (dd/mm/yyyy)"/>
        <TextField label="Bordetella:" placeholder="Date of last vaccine (dd/mm/yyyy)"/>
        <TextField label="DHLPP:" placeholder="Date of last vaccine (dd/mm/yyyy)"/>
        <p style={{paddingTop: '10px'}}>
          <DefaultButton
            text="Save"
            iconProps={saveIcon} />
        </p>
      </div>
    );
  }