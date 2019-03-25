import React,{ useState} from 'react';
import styled from 'styled-components';
import WorkoutInfo from './WorkoutInfo';
import {ThemeColors} from './Elements';

//components
const StyledBigScreen = styled.div`
  height: 667px;
  background-color: ${props => props.profile === 'luis' ? ThemeColors.red : ThemeColors.pink };
  transition: background-color 0.5s ease;
`
const HeaderTitle = styled.h2`
  color: ${ThemeColors.white};
  font-weight: 700;
  font-size: 1.031rem;
  margin-bottom: 30px;
  text-transform: capitalize;
`
const Container = styled.div`
  padding-top: 5%;
  margin: 0 16px;
`
const ExcerciseTitle = styled.div`
  font-family: 'IBM Plex Sans';
  font-weight: 400;
  color: ${ThemeColors.white};
  font-size: 1.719rem;
  margin-bottom: 30px;
`

const ExcerciseName = styled.div`
  color: ${ThemeColors.white};
  font-weight: 600;
  font-size: 2.12rem;
  margin-bottom: 8px;
  text-transform: capitalize;
  `
 const ExcerciseBodyPart = styled.div`
   font-family: 'IBM Plex Sans';
   color: ${ThemeColors.white};
   font-weight: 400;

  `
// Start main function
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
    if(profile.actual.name === profile.luis.name){
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
      <StyledBigScreen profile={profile.actual.name}>
        <Container>
          <HeaderTitle>{profile.actual.name}</HeaderTitle>
          <ExcerciseTitle>Ejercicio: </ExcerciseTitle>
          <ExcerciseName>{profile.actual.exercises[profile.actual.exerciseArrayPosition].name}</ExcerciseName>
          <ExcerciseBodyPart>{profile.actual.exercises[profile.actual.exerciseArrayPosition].bodyPart}</ExcerciseBodyPart>
          {/* <Serie> Serie {profile.actual.exercises[profile.actual.exerciseArrayPosition].serie} de {profile.actual.exercises[profile.actual.exerciseArrayPosition].maxSerie}</Serie> */}
          {/* <Weight> Peso: {profile.actual.exercises[profile.actual.exerciseArrayPosition].weight} lb </Weight> */}
          {/* <BigScreenWrapper>
            <NextButton action={ ()=>{ changeProfile(); } } profile={profile.actual.name}> Siguiente </NextButton>
          </BigScreenWrapper> */}
          <WorkoutInfo data={profile.actual.exercises[profile.actual.exerciseArrayPosition]} action={changeProfile} profile={profile.actual.name} />
        </Container>
      </StyledBigScreen>
    </>
  );
};
export default BigScreen;
