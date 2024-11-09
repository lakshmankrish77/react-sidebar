import React, { useState, useEffect } from 'react';
import { MainContainer } from '../../components/Contents/Contents.elements';
import { LogoSeccion } from '../../components/Imgs/logoSeccion.elements';
import Factura from '../../assets/Factura.svg';
import { expresiones } from '../../helpers/expresions';
// import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import {Button, Box, TextField} from "@material-ui/core";
import {Field, Form, Formik } from "formik";
// import SendIcon from '@material-ui/icons/Send';

const chipStyle = {
  fontSize: '16px',
  width: '425px',
  height: '39px',
  marginRight: '36px',
  display: 'inline-block',
  lineHeight: '24px',
};


export const FacturaPage = () => {

  return (
    <div className="MaterialForm">
       <Formik>
        {() => (
          <Form>
          <Field></Field>
          <Field></Field>
          <Field></Field>
          <Button>Sign Up</Button>
          </Form>
        )}
       </Formik>
    </div>
  );
  // const [email, setEmail] = useState({ field: '', valid: null });
  // return (
  //   <MainContainer active={props.toggle}>
  //     <Button variant="contained">Hello World</Button>

  //     <Chip label="Chip Filled" />
  //     <Chip label="Chip Outlined" variant="outlined" />
  //   </MainContainer>
  // );
};
