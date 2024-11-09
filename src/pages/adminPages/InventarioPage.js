import React, { useState, useEffect } from 'react';

import { MainContainer } from '../../components/Contents/Contents.elements';
import { LogoSeccion } from '../../components/Imgs/logoSeccion.elements';
import Inventario from '../../assets/Inventario.svg';

export const InventarioPage = (props) => {
  const fakeInventory = ['arroz', 'frijoles'];
  return (
    <MainContainer active={props.toggle}>
      <LogoSeccion src={Inventario} alt="" />
    </MainContainer>
  );
};
