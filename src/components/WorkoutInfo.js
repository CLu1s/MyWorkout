import React from 'react';
import {Button,ThemeColors} from './Elements';
import styled from 'styled-components';

// Components

const StyledWorkOutInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 310px;
  height: 366px;
  overflow: hidden;
  background-color: ${ThemeColors.bg};
  margin: auto;
  margin-top: 47px;
  padding: 36px 21px;
  border-radius: 12px;
  box-shadow: 9px 19px 4px 0px rgba(0,0,0,.5);
`
const WorkOutInfoItem = styled.h3`
  margin: 0;
  font-size: 2.12rem;
  text-align: center;
  line-height: 1;
`
const WorkOutInfoTile = styled.h4`
  margin: 0;
  margin-bottom: 8px;
  font-size: 1.49rem;
  font-weight: 400;
  text-align: center;
  color: ${ThemeColors.black};
`
const WorkOutInfoWrapper = styled.div`
  width: 125px;
  height: 80%;
  float: left;
  margin-top: 2%;
  padding: 2% 0;
  flex: 0 0 50%;
  max-width: 50%;
  max-height: 35%;
`

const StyledButton = styled(Button)`
  font-family: 'Roboto';
  border: none;
  margin: auto;
  border-radius: 10px;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  text-transform: capitalize;
  font-size: 26px;
  font-weight: 300;
  margin-top: 15px;
  background-color: ${ ThemeColors.blue };
  transition: background-color 0.5s ease;
  height: 46px;
  width: 208px;
`
const WorkOutInfo = (props) => {
  return(
    <StyledWorkOutInfo>
      <WorkOutInfoWrapper>
        <WorkOutInfoTile>
          Serie
        </WorkOutInfoTile>
        <WorkOutInfoItem>
          {props.data.serie} de {props.data.maxSerie}
        </WorkOutInfoItem>
      </WorkOutInfoWrapper>
      <WorkOutInfoWrapper>
        <WorkOutInfoTile>
          Peso
        </WorkOutInfoTile>
        <WorkOutInfoItem>
          {props.data.weight}
        </WorkOutInfoItem>
      </WorkOutInfoWrapper>
      <WorkOutInfoWrapper>
        <WorkOutInfoTile>
          Reps
        </WorkOutInfoTile>
        <WorkOutInfoItem>
          {props.data.reps}
        </WorkOutInfoItem>
      </WorkOutInfoWrapper>
      <WorkOutInfoWrapper>
        <WorkOutInfoTile>
          Tiempo
        </WorkOutInfoTile>
        <WorkOutInfoItem>
          {props.data.tempo}
        </WorkOutInfoItem>
      </WorkOutInfoWrapper>
      <StyledButton action={ ()=>{ props.action() } } profile={props.profile}>
      Siguiente
        </StyledButton>
    </StyledWorkOutInfo>
  );
};

export default WorkOutInfo;