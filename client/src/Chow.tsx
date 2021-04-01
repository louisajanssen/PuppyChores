import * as React from "react";
import { ChowDay} from './ChowDay'
import { Dropdown, IDropdownStyles, IDropdownOption, Stack, Text, IStackItemStyles, IStackStyles, IStackTokens} from '@fluentui/react';
import { ChowToggle } from "./ChowToggle";
import { ChowNotes } from "./ChowNotes";

// const theme = getTheme();


const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300},
};

const stackItemStyles: IStackItemStyles = {
  root: {
    background: 'white',
    color: 'black',
    padding: 5,
  },
};
const itemAlignmentsStackStyles: IStackStyles = {
  root: {
    background: 'white',
    height: 100
  },
};

const itemAlignmentsStackTokens: IStackTokens = {
  childrenGap: 5,
  padding: 10,
};


const selectWeekStyles = {
  paddingLeft: 30
}

const textStyles = {
  padding:10
}
// const mainDivStyles = {
//   boxShadow: theme.effects.elevation64,
//   width: '100%'
// }

  
  export const Chow = () => {
    const [weekRender, setWeekRender] = React.useState('')
  
  
    const options: IDropdownOption[] = [
      {key:"Week1", text:"Week 03/28/2021 to 04/03/2021"},
      {key:"Week2", text:"Week 04/04/2021 to 04/10/2021"},
    ]

    const onWeekClick = () => {
      setWeekRender('Week1')
    }
  

    if(weekRender === 'Week1') {
      return (
        <div>
            <div style={selectWeekStyles}>
              <Text style={textStyles} variant="large">Week 03/28/2021 to 04/03/2021</Text>
                <Dropdown
                  placeholder="Select an option"
                  label="Select Week"
                  options={options}
                  styles={dropdownStyles}
                />
            </div>
            <Stack>
            <Stack.Item align="center">
              <div style={{paddingTop: '30px'}}>
                <Stack horizontal disableShrink styles={itemAlignmentsStackStyles} tokens={itemAlignmentsStackTokens}>
                    <Stack.Item align="auto" styles={stackItemStyles}>
                      <ChowDay />
                    </Stack.Item>
                    <Stack.Item align="auto" styles={stackItemStyles}>
                    <Text style ={{ paddingLeft: '12px', fontWeight: 'bold'}} variant="large">AM</Text>
                      <ChowToggle />
                    </Stack.Item>
                    <Stack.Item align="auto" styles={stackItemStyles}>
                      <Text style ={{ paddingLeft: '12px', fontWeight: 'bold'}} variant="large">PM</Text>
                      <ChowToggle />
                    </Stack.Item>
                    <Stack.Item align="auto" styles={stackItemStyles}>
                    <Text style ={{ paddingLeft: '12px', fontWeight: 'bold'}} variant="large">Notes</Text>
                      <ChowNotes />
                    </Stack.Item>
                </Stack>
              </div>
            </Stack.Item>       
            </Stack>
        </div>
      );
    }
    else {
      return (
        <div style={selectWeekStyles}>
            <Text style={textStyles} variant="xLarge">CHOW TIME</Text>
            <Stack style={textStyles}>
              <Dropdown
                placeholder="Select an option"
                label="Select Week"
                options={options}
                styles={dropdownStyles}
                onChange={onWeekClick}
              />
            </Stack>
        </div>
      );
    }
  }