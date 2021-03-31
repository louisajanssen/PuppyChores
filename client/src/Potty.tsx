import * as React from "react";
import { Dropdown, IDropdownStyles, IStackTokens, IDropdownOption, Stack, DefaultPalette, IStackStyles, Text, IStackItemStyles} from '@fluentui/react';

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.white,
  },
};

const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    background: '#c8c6c4',
    color: DefaultPalette.white,
    display: 'flex',
    height: 400,
    justifyContent: 'center',
  },
};

const stackItemDateStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    background: DefaultPalette.white,
    color: DefaultPalette.black,
    display: 'flex',
    height: 10,
    justifyContent: 'center',
  },
};

const divStyles = {
  paddingTop: 20
}

const selectWeekStyles = {
  paddingLeft: 30
}

const textStyles = {
  padding:10
}

const stackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10,
};
  
  export const Potty = () => {
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
            <div style={divStyles}>
              <Stack horizontal styles={stackStyles} tokens={stackTokens}>
                <Stack.Item grow={2} styles={stackItemDateStyles}>
                  <Text variant="medium">MON</Text>
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemDateStyles}>
                  <Text variant="medium">TUE</Text>
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemDateStyles}>
                  <Text variant="medium">WED</Text>
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemDateStyles}>
                  <Text variant="medium">THUR</Text>
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemDateStyles}>
                  <Text variant="medium">FRI</Text>
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemDateStyles}>
                  <Text variant="medium">SAT</Text>
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemDateStyles}>
                  <Text variant="medium">SUN</Text>
                </Stack.Item>
              </Stack>
              <Stack horizontal styles={stackStyles} tokens={stackTokens}>
                <Stack.Item grow={2} styles={stackItemStyles}>
                  Grow is 2
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                  Grow is 2
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                  Grow is 2
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                  Grow is 2
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                  Grow is 2
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                  Grow is 2
                </Stack.Item>
                <Stack.Item grow={2} styles={stackItemStyles}>
                  Grow is 2
                </Stack.Item>
              </Stack>
            </div>
        </div>
      );
    }
    else {
      return (
        <div style={selectWeekStyles}>
            <Text style={textStyles} variant="xLarge">POTTY TRACKER</Text>
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
