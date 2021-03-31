import * as React from "react";
import { Stack, TextField } from '@fluentui/react';
  
  export const GeneralInfo: React.FC = () => {
  
    return (
      <Stack>
          <h2>MIKO</h2>
          <TextField label="Breed:" placeholder="Mini Australian Shepherd"/>
          <TextField label="Birthday:" placeholder="10/27/17"/>
          <TextField label="Food:" placeholder="Royal Canine"/>
          <TextField label="Favorite Treats:" placeholder="Carrot, Salmon, Cheese"/>
          <TextField label="Vet:" placeholder="Eastside Vet Associates"/>
      </Stack>
      // <Stack>
      //   <span>Breed:</span>
      //   <DocumentCard>Mini Australian Shepherd</DocumentCard>
      //   <span>Birthday:</span>
      //   <DocumentCard>10/28/2017</DocumentCard>
      //   <span>Food:</span>
      //   <DocumentCard>Royal Canine</DocumentCard>
      //   <span>Favorite Treats:</span>
      //   <DocumentCard>Carrot, Salmon, Cheese</DocumentCard>
      //   <span>Vet:</span>
      //   <DocumentCard>Eastside Vet Associates</DocumentCard>
      // </Stack>
    );
  }