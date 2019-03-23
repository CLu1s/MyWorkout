import React,{ useState, useEffect } from 'react';
import Button from './Button';
const WorkOutInfo = (props) => {
  return(
    <div className="workout-info">
      <div className="workout-info__reps">
        <div className="workout-info__item">{props.reps}</div>
        <div className="workout-info__title">Repeticiones</div>
      </div>
      <div className="workout-info__time">
        <div className="workout-info__item">{props.tempo}</div>
        <div className="workout-info__title"> Tiempo</div>
      </div>
      <div className="workout-info__rest">
        <Button className="workout-info__button" text={`Descansar ${props.restTime}`} />
      </div>
    </div>
  );
};

export default WorkOutInfo;