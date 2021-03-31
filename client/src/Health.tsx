import * as React from "react";
import { DocumentCard } from '@fluentui/react';
  
  export const Health: React.FC = () => {
  
  
    return (
      <DocumentCard>
          <h2>Vaccination Record</h2>
          <p>Distemper: 12/22/2017</p>
          <p>Parvovirus: 12/22/2017</p>
          <p>Adenovirus: 12/22/2017</p>
          <p>Rabies: 2/14/2019</p>
          <p>Bordetella: 10/26/2020</p>
          <p>DHLPP: 10/26/2020</p>
          <p>+ Add Vaccine</p>
          <h3>Next Due:</h3>
          <p>DHLPP: 10/25/2021</p>
          <p>Bordetella: 10/25/2021</p>
          <p>Rabies: 02/13/2022</p>
          <h3>Allergies</h3>
          <p>+ Add Allergies</p>
      </DocumentCard>
    );
  }