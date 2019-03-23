import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
function Button(props){
  const NEW_CLASS_NAME = `button ${props.className}`;
  return(
    <button className={NEW_CLASS_NAME} onClick={()=>{ props.action(); } } >{props.text}</button>
  );
}
Button.propTypes = {
  action: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Button;