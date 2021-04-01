import * as React from "react";
import { IStackTokens, IStackStyles, Stack, Toggle } from '@fluentui/react';

const verticalGapStackTokens: IStackTokens = {
    childrenGap: 15,
    padding: 10,
  };
const stackStyles: IStackStyles = {
root: {
    background: "white",
},
};

export const ChowToggle = () => {
    
    return (
        <div>
          <Stack styles={stackStyles} tokens={verticalGapStackTokens}>
            <span style ={{ paddingTop: '5px'}}><Toggle defaultChecked onText="Yes" offText="No"/></span>
            <span style ={{ paddingTop: '5px'}}><Toggle defaultChecked onText="Yes" offText="No"/></span>
            <span style ={{ paddingTop: '5px'}}><Toggle defaultChecked onText="Yes" offText="No"/></span>
            <span style ={{ paddingTop: '5px'}}><Toggle onText="Yes" offText="No"/></span>
            <span style ={{ paddingTop: '5px'}}><Toggle onText="Yes" offText="No"/></span>
            <span style ={{ paddingTop: '5px'}}><Toggle onText="Yes" offText="No"/></span>
            <span style ={{ paddingTop: '5px'}}><Toggle onText="Yes" offText="No"/></span>
          </Stack>
        </div>
    )
}