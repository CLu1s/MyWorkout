import React from 'react';
import styled from 'styled-components';
import {ThemeColors} from './Elements';
const HeaderContainer = styled.header`
  background-color: transparent;
  position: fixed;
  display: flex;
  justify-items: center;
  width: 100%;
  height: 60px;
`
const SiteTitle = styled.h1`
  color: ${ThemeColors.white};
  text-align: center;
  margin: auto;
`
const Header  = (props) => {
  return(
    <HeaderContainer>
      {/* <SiteTitle>{props.siteTitle}</SiteTitle> */}
    </HeaderContainer>
  );
}

export default Header;