import React, { useState, useEffect } from 'react';
import { MainContainer } from '../../components/Contents/Contents.elements';
import UserForm from './screens/UserForm';


export const ClientesPage = (props) => {
 
  return (
    <div>
      <MainContainer active={props.toggle}>
        <UserForm/>
      </MainContainer>
    </div>
  );
};
