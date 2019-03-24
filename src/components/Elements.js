import React from "react";
import styled from 'styled-components';

const NormalButton = ({className,children,...props}) => (
  <button className={className} onClick={()=>{ props.action() } }>{children}</button>
)

const Button = styled(NormalButton)`
  border-radius: 10px;
  font-family: 'Work Sans',sans-serif;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5)
`;

export {Button};

 