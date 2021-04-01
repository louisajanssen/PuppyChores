import * as React from "react";
import { Text, IStackTokens, IStackStyles, Stack} from '@fluentui/react';

const verticalGapStackTokens: IStackTokens = {
    childrenGap: 15,
    padding: 10,
  };
const stackStyles: IStackStyles = {
root: {
    background: "white",
},
};

export const ChowDay = () => {
    
    return (
        <div>
          <Stack styles={stackStyles} tokens={verticalGapStackTokens}>
            <Text style ={{ paddingTop: '15px', fontWeight: 'bold'}} variant="large" >Monday</Text>
            <Text style ={{ paddingTop: '13px', fontWeight: 'bold'}} variant="large" >Tuesday</Text>
            <Text style ={{ paddingTop: '10px', fontWeight: 'bold'}} variant="large" >Wednesday</Text>
            <Text style ={{ paddingTop: '10px', fontWeight: 'bold'}} variant="large" >Thursday</Text>
            <Text style ={{ paddingTop: '10px', fontWeight: 'bold'}} variant="large" >Friday</Text>
            <Text style ={{ paddingTop: '10px', fontWeight: 'bold'}} variant="large" >Saturday</Text>
            <Text style ={{ paddingTop: '10px', fontWeight: 'bold'}} variant="large" >Sunday</Text>
          </Stack>
        </div>
    )
}