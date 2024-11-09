import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  padding: 10px;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const ContainerButtonCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 1;
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;
const ContainerTermsandConditions = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 1;
  input {
    margin-right: 10px;
  }
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;
const GroupInput = styled.div`
  position: relative;
  z-index: 90;
`;
const Colors = {
  border: '#0075FF',
  error: '#bb2929',
  success: '#1ed12d',
  errorSubmit: '#f66060',
  primary: '#5C62C5',
};

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 0px;
  min-height: 40px;
  cursor: pointer;

  ${(props) =>
    props.valid === 'false' &&
    css`
      color: ${Colors.error} !important;
    `}
`;

const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  padding: 0 40px 0 3px;
  transition: 0.3s ease all;
  border: 0px;
  border-bottom: 2px solid lightgrey;

  &:focus {
    border: 0px;
    border-bottom: 2px solid ${Colors.border};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.valid === 'true' &&
    css`
      border: 0px;
      border-bottom: 3px solid green;
    `}
  ${(props) =>
    props.valid === 'false' &&
    css`
      border: 0px;
      border-bottom: 3px solid ${Colors.error} !important;
    `}
`;

const IncorrectMessage = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${Colors.error};
  display: none;
  ${(props) =>
    props.valid === 'true' &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valid === 'false' &&
    css`
      display: block;
    `}
`;

const SuccessMessage = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  color: ${Colors.success};
  margin-bottom: 20px;
`;
const ErrorMessage = styled.p`
  height: 45px;
  display: flex;
  justify-content: center;
  line-height: 45px;
  background: ${Colors.errorSubmit};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 1;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;
const ValidationIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) =>
    props.valid === 'true' &&
    css`
      opacity: 1;
      color: ${Colors.success};
    `}
  ${(props) =>
    props.valid === 'false' &&
    css`
      opacity: 1;
      color: ${Colors.error};
    `}
`;

const CustomButton = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;
  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

export {
  CustomButton,
  CustomForm,
  Label,
  Input,
  GroupInput,
  IncorrectMessage,
  ValidationIcon,
  ContainerTermsandConditions,
  ContainerButtonCenter,
  SuccessMessage,
  ErrorMessage,
};
