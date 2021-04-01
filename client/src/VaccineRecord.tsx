import * as React from "react";
import { TextField, getTheme, Stack, IStackStyles, IStackTokens, IStackItemStyles, DefaultPalette, Text, Icon } from '@fluentui/react';

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
// const stackTokens: IStackTokens = {
//   childrenGap: 5,
//   padding: 10,
// };
const itemAlignmentsStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

const mainDivStyles = {
  boxShadow: theme.effects.elevation16,
  width: 350,
  padding: 25,
  align: 'center'
}


  
  export const VaccineRecord: React.FC = () => {
  
    return (
      <Stack horizontal styles={stackStyles} tokens={itemAlignmentsStackTokens}>
          <Stack.Item align="auto" styles={mainStackItemStyles}>
          <div style={mainDivStyles}>
            <Stack.Item grow={2} styles={stackItemStyles}>
              <Text variant="xLarge">VACCINATION RECORD</Text>
                <span style={{ paddingLeft: '5px'}}>
                  <Icon iconName="Edit"/>
                </span>
            </Stack.Item>
            <TextField label="Distemper:" placeholder="12/22/2017"/>
            <TextField label="Parvovirus:" placeholder="12/22/2017"/>
            <TextField label="Adenovirus:" placeholder="12/22/2017"/>
            <TextField label="Rabies:" placeholder="2/14/2019"/>
            <TextField label="Bordetella:" placeholder="10/26/2020"/>
            <TextField label="DHLPP:" placeholder="10/26/2020"/>
          </div>
          </Stack.Item>
      </Stack>
    );
  }