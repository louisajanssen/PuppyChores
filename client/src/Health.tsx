import * as React from "react";
import { Stack, IStackStyles, IStackTokens, DefaultPalette } from '@fluentui/react';
import { VaccineRecord } from "./VaccineRecord";
import { NextDue } from "./NextDue";
import { Allergies } from './Allergies'


const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
    paddingTop: 40,
  },
};


const itemAlignmentsStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};

  
  export const Health: React.FC = () => {
  
    return (
      <Stack horizontal horizontalAlign="center" styles={stackStyles} tokens={itemAlignmentsStackTokens}>
        <Stack.Item>
          <VaccineRecord />
        </Stack.Item>
        <Stack.Item>
          <NextDue />
        </Stack.Item>
        <Stack.Item>
          <Allergies />
        </Stack.Item>
      </Stack>
    );
  }