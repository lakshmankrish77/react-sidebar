import React from 'react';
import {
  Label,
  Input,
  GroupInput,
  IncorrectMessage,
  ValidationIcon
} from './Form.elements';

import {
  faCheckCircle,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons';

export function CustomInput({
  label,
  placeholder,
  type,
  name,
  incorrectMessage,
  setState,
  state,
  normalExp,
  same
}) {
  const onChange = ({ target }) => {
    setState({ ...state, field: target.value });
  };

  const validation = () => {
    if (normalExp) {
      if (normalExp.test(state.field)) {
        setState({ ...state, valid: 'true' });
      } else setState({ ...state, valid: 'false' });
    }
    if (same) {
      same();
    }
  };

  return (
    <div>
      <Label htmlFor={name} valid={state.valid}>
        {label}
      </Label>
      <GroupInput>
        <Input
          type={type}
          placeholder={placeholder}
          id={name}
          onChange={onChange}
          value={state.field}
          onKeyUp={validation}
          onBlur={validation}
          valid={state.valid}
        />
        {
          <ValidationIcon
            valid={state.valid}
            icon={state.valid === 'true' ? faCheckCircle : faTimesCircle}
          />
        }
      </GroupInput>
      <IncorrectMessage valid={state.valid}>
        {incorrectMessage}
      </IncorrectMessage>
    </div>
  );
}
