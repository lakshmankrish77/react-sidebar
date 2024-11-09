import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CustomInput } from '../../components/Form/Form';
import { expresiones } from '../../helpers/expresions';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {
  CustomForm,
  Label,
  ContainerTermsandConditions,
  ContainerButtonCenter,
  CustomButton,
  SuccessMessage,
  ErrorMessage,
} from '../../components/Form/Form.elements';
import { registerUser } from '../../redux/actions/register.action';

export const RegisterPage = () => {
  const [user, setUser] = useState({ field: '', valid: null });
  const [email, setEmail] = useState({ field: '', valid: null });
  const [password, setPassword] = useState({ field: '', valid: null });
  const [passwordConf, setPasswordConf] = useState({ field: '', valid: null });
  const [terms, setTerms] = useState(false);
  const [validForm, setValidForm] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      user.valid === 'true' &&
      email.valid === 'true' &&
      password.valid === 'true' &&
      passwordConf.valid === 'true' &&
      terms
    ) {
      const usuario = {
        user: user.field,
      };
      setValidForm(true);
      console.log(usuario);
      dispatch(registerUser(usuario));
    } else {
      setValidForm(false);
    }
  };
  const validarPasswordConf = () => {
    if (password.field.length > 0) {
      if (password.field !== passwordConf.field) {
        setPasswordConf((prevState) => {
          return { ...prevState, valid: 'false' };
        });
      } else {
        setPasswordConf((prevState) => {
          return { ...prevState, valid: 'true' };
        });
      }
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
            state={user}
            setState={setUser}
            label="Usuario"
            placeholder="Usuario"
            name="Usuario"
            incorrectMessage="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
            normalExp={expresiones.usuario}
          />
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
          <CustomInput
            state={passwordConf}
            setState={setPasswordConf}
            label="Confirmar Password"
            placeholder="Confirmacion"
            type="password"
            incorrectMessage="Las contraseñas deben coincidir  ."
            same={validarPasswordConf}
          />
          <ContainerTermsandConditions>
            <Label>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={terms}
                onChange={onChangeTerms}
              />
              Acepto los terminos y condiciones
            </Label>
          </ContainerTermsandConditions>
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
            <CustomButton type="submit">Enviar</CustomButton>
          </ContainerButtonCenter>
        </CustomForm>
      </div>
    </main>
  );
};
