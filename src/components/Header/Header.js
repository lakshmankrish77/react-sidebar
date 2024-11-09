import React from 'react';
import { Headerbar, UserIcon } from './Header.elements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  

export default function Header(props) {
  return (
    <Headerbar active={props.toggle}>
      {/* <i
        className="bx bx-menu"
        id="header-toggle"
        onClick={() => {
          props.setToggle((prevState) => !prevState);
        }}
      ></i> */}
      <i/>
      <UserIcon>BRAINHUT</UserIcon>
    </Headerbar>
  );
}
