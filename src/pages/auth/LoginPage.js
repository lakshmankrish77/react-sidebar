import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomInput } from '../../components/Form/Form';
import { expresiones } from '../../helpers/expresions';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/authentication.action';
import { useDispatch } from 'react-redux';

import {
  CustomForm,
  ContainerButtonCenter,
  CustomButton,
  SuccessMessage,
  ErrorMessage,
} from '../../components/Form/Form.elements';

export const LoginPage = () => {
  const [email, setEmail] = useState({ field: '', valid: null });
  const [password, setPassword] = useState({ field: '', valid: null });
  const [validForm, setValidForm] = useState();
  const [terms, setTerms] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginL = () => {
    {
      navigate('/');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.valid === 'true' && password.valid === 'true') {
      const user = {
        email: email.field,
        password: password.field,
      };
      console.log(user);
      setValidForm(true);
      dispatch(login(user));
      loginL();
    } else {
      setValidForm(false);
    }
  };
  const validarPasswordConf = () => {
    if (password.field.length > 0) {
      // if (password.field !== passwordConf.field) {
        setPassword((prevState) => {
          return { ...prevState, valid: 'false' };
        });
      } else {
        setPassword((prevState) => {
          return { ...prevState, valid: 'true' };
        });
      // }
    }
  };

  const onChangeTerms = ({ target }) => {
    setTerms(target.checked);
  };

  return (
    <main>
      <div
        style={{
          background: 'white',
          margin: '20px',
          padding: '20px',
          borderRadius: '5%',
        }}
      >
        <CustomForm action="" onSubmit={onSubmit}>
          <CustomInput
            state={email}
            setState={setEmail}
            label="Correo Electrónico"
            placeholder="Correo Electrónico"
            name="Correo"
            incorrectMessage="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo"
            normalExp={expresiones.correo}
          />
          <CustomInput
            state={password}
            setState={setPassword}
            label="Password"
            placeholder="Password"
            type="password"
            incorrectMessage="La contraseña tiene que ser de 4 a 12 dígitos. "
            normalExp={expresiones.password}
          />
          {validForm === false && (
            <ErrorMessage>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error: </b>
                Por favor llenar el formulario correctamente
              </p>
            </ErrorMessage>
          )}
          <ContainerButtonCenter>
            {validForm === true && (
              <SuccessMessage>
                El formulario fue enviado exitosamente
              </SuccessMessage>
            )}
            <CustomButton type="submit">Ingresar</CustomButton>
          </ContainerButtonCenter>
        </CustomForm>
      </div>
    </main>
  );
};
