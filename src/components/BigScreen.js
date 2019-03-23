import React,{ useState, useEffect } from 'react';
import WorkoutInfo from './WorkoutInfo';
const BigScreen = (props) => {
  const [profile,setProfile] = useState({
    actual: props.dataOfLuis,
    button: props.dataOfMilhy, 
    milhy:  props.dataOfMilhy, 
    luis:   props.dataOfLuis,
  });
  function changeProfile(){
    let newProfile;
    let newButtonProfile;
    let luisTempProfile = profile.luis;
    let milhyTempProfile = profile.milhy;
    if(profile.actual.name == profile.luis.name){
      newProfile = profile.milhy;
      newButtonProfile = profile.luis;
      luisTempProfile = updateProfile(profile.luis);
    }else{
      newProfile = profile.luis;
      newButtonProfile = profile.milhy;
      milhyTempProfile = updateProfile(profile.milhy);
    }

    setProfile({
      actual: newProfile,
      button: newButtonProfile, 
      milhy:  milhyTempProfile, 
      luis:   luisTempProfile,
    });
  }


  function updateProfile(currentProfile){
    let profile = currentProfile;
    let exercises = profile.exercises;
    console.log(profile.exerciseArrayPosition);
    
    profile.exercises = setExercises(exercises,profile.exerciseArrayPosition);
    profile.exerciseArrayPosition = defineArrayPosition(profile);
    return profile;
  }

  function defineArrayPosition(profile){
    if (profile.exerciseArrayPosition <= profile.exercises.length-1)
      if (checkMaxSerie(profile)){
        return profile.exerciseArrayPosition + 1;
      }else{
        return profile.exerciseArrayPosition ;
      }
    return 0;
  }
  function checkMaxSerie(profile, max = false){
    let actualSerie = 0;
    let maxSerie = 0;
    if(!max){
      actualSerie = profile.exercises[profile.exerciseArrayPosition].serie; 
      maxSerie = profile.exercises[profile.exerciseArrayPosition].maxSerie;
    }else{
      actualSerie = profile;
      maxSerie = max;
    }
    if(actualSerie > maxSerie){
      return true;
    }
    return false;
  }
  
  function setExercises(exercises,position){
    let localExercises = exercises;
    let actual = exercises[position].serie;
    let max = exercises[position].maxSerie;
    if(checkMaxSerie(actual,max)){
      actual = 0;
    }else{
      actual += 1;
    }
    localExercises[position].serie = actual;
    return localExercises;
  }
  return(
    <>
      <div className={`big-screen big-screen--${profile.actual.name}`}>
        <div className="big-screen__container"> 
          <div className="big-screen__type">{profile.actual.name}</div>
          <div className="big-screen__exercise"> {profile.actual.exercises[profile.actual.exerciseArrayPosition].name} </div>
          <div className="big-screen__serie">Serie {profile.actual.exercises[profile.actual.exerciseArrayPosition].serie} de {profile.actual.exercises[profile.actual.exerciseArrayPosition].maxSerie}</div>
          <div className="big-screen__weight">Peso: {profile.actual.exercises[profile.actual.exerciseArrayPosition].weight} lb</div>
          <button className={`button big-screen__button big-screen__button--${profile.button.name}`} onClick={ ()=>{ changeProfile(); } }> Siguiente </button>
        </div>
      </div>
      <WorkoutInfo reps={profile.actual.exercises[profile.actual.exerciseArrayPosition].reps} tempo={profile.actual.exercises[profile.actual.exerciseArrayPosition].tempo} restTime={profile.actual.exercises[profile.actual.exerciseArrayPosition].restTime} />
    </>
  );
};
export default BigScreen;
