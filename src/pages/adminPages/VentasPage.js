import React, { useState, useEffect } from 'react';
import { MainContainer } from '../../components/Contents/Contents.elements';
import { LogoSeccion } from '../../components/Imgs/logoSeccion.elements';
import Ventas from '../../assets/Ventas.svg';
export const VentasPage = (props) => {
  return (
    <MainContainer active={props.toggle}>
      <div >
        <LogoSeccion src={Ventas} alt=""  />
        <h1 >Ventas</h1>
      </div>

    </MainContainer>
  );
};
