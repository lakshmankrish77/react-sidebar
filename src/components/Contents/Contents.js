import React from 'react';
import { MainContainer } from './Contents.elements';
import { LoginPage } from '../../pages/auth/LoginPage';

export default function Contents(props) {

  return <MainContainer active={props.toggle}></MainContainer>;
}
