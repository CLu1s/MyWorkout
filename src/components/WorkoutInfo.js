import React from 'react';
import {Button} from './Elements';
import styled from 'styled-components';

// Components

const StyledWorkOutInfo = styled.div`
  width: 100%;
  height: 79px;
  overflow: hidden;
  background-color: white;
  margin-top: 20px
`
const WorkOutInfoItem = styled.div`
  font-size: 30px;
  text-align: center;
  line-height: 1
`
const WorkOutInfoTile = styled.div`
  font-size: 14px;
  text-align: center;
  color: #617078;
`
const WorkOutInfoWrapper = styled.div`
  width: 125px;
  height: 80%;
  float: left;
  margin-top: 2%;
  padding: 2% 0;
`
const WorkOutInfoWrapperWithRightBorder = styled(WorkOutInfoWrapper)`
  border-right: solid 1px #979797;  
`
const StyledButton = styled(Button)`
  font-size: 18px;
  text-align: center;
  background-color: #F4F4F8;
  color: #00081B;
  font-weight: 300;
  margin: 0 5%;
  line-height: 1.4;
  max-width: 110px
`
const WorkOutInfo = (props) => {
  return(
    <StyledWorkOutInfo>
      <WorkOutInfoWrapperWithRightBorder>
        <WorkOutInfoItem>
          {props.reps}
        </WorkOutInfoItem>
        <WorkOutInfoTile>
          Repeticiones
        </WorkOutInfoTile>
      </WorkOutInfoWrapperWithRightBorder>
      <WorkOutInfoWrapperWithRightBorder>
        <WorkOutInfoItem>
          {props.tempo}
        </WorkOutInfoItem>
        <WorkOutInfoTile>
          Tiempo
        </WorkOutInfoTile>
      </WorkOutInfoWrapperWithRightBorder>
      <WorkOutInfoWrapper>
      <StyledButton>
            {`Descansar ${props.restTime}`}
        </StyledButton>
      </WorkOutInfoWrapper>
    </StyledWorkOutInfo>
  );
};

export default WorkOutInfo;