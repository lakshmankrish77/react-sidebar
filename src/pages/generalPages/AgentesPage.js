import React, { useState, useEffect } from 'react';

import { MainContainer } from '../../components/Contents/Contents.elements';
import ProductEntry from './screens/ProductEntry';

export const AgentesPage = (props) => {
  

  return (
    <div>
      <MainContainer active={props.toggle}>
        <ProductEntry/>
      </MainContainer>
    </div>
  );
};
