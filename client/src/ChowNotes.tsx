import * as React from "react";
import { IStackTokens, IStackStyles, Stack, TextField } from '@fluentui/react';

const verticalGapStackTokens: IStackTokens = {
    childrenGap: 15,
    padding: 10,
  };
const stackStyles: IStackStyles = {
root: {
    background: "white",
},
};

export const ChowNotes = () => {
    
    return (
        <div>
          <Stack styles={stackStyles} tokens={verticalGapStackTokens}>
              <TextField style={{width: '500px'}} />
              <TextField placeholder="Added pumpkin puree to food today."/>
              <TextField placeholder="Didn't seem to have an appetite in the evening. Might need to check with vet."/>
              <TextField />
              <TextField />
              <TextField />
              <TextField />
          </Stack>
        </div>
    )
}