import React, { useState, useEffect } from 'react';
import { MainContainer } from '../../components/Contents/Contents.elements';
import { LogoSeccion } from '../../components/Imgs/logoSeccion.elements';
import Roles from '../../assets/Roles.svg';
export const RolesPage = (props) => {
  return (
    <MainContainer active={props.toggle}>

        <LogoSeccion src={Roles} alt="" />

    </MainContainer>
  );
};
