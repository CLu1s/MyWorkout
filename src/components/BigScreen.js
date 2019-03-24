import React,{ useState} from 'react';
import styled from 'styled-components';
import WorkoutInfo from './WorkoutInfo';
import {Button} from './Elements';

//components
const StyledBigScreen = styled.div`
  box-shadow: 0 2px 13px rgba(0,0,0,0.5);
  background-color: ${props => props.profile === 'luis' ? '#FF0026': '#5603AD' };
  transition: background-color 0.5s ease;
`
const HeaderTitle = styled.h2`
  font-family: $IBM-reg;
  color: #FFF;
  font-size: 2.5rem;
  text-align: center;
  text-transform: capitalize
`
const Container = styled.div`
  padding-top: 5%;
`
const ExcerciseName = styled.div`
  color: white;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 16px;
  text-transform: capitalize;
  `
const Serie = styled(ExcerciseName)`
  font-size: 32px
  text-transform: none;
`
const Weight = styled(ExcerciseName)`
  font-size: 30px;
  text-transform: none;
`
const NextButton = styled(Button)`
  width: 178px;
  height: 44px;
  border: none;
  margin: 15px 30%;
  border-radius: 10px;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  text-transform: capitalize;
  font-family: $Roboto-reg;
  font-size: 26px;
  font-weight: 300;
  margin-top: 15px;
  background-color: ${props => props.profile === 'luis' ? '#5603AD' : '#FF0026'  };
  transition: background-color 0.5s ease
`
const BigScreenWrapper = styled.div`
  width: 100%;
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
          <ExcerciseName>{profile.actual.exercises[profile.actual.exerciseArrayPosition].name}</ExcerciseName>
          <Serie> Serie {profile.actual.exercises[profile.actual.exerciseArrayPosition].serie} de {profile.actual.exercises[profile.actual.exerciseArrayPosition].maxSerie}</Serie>
          <Weight> Peso: {profile.actual.exercises[profile.actual.exerciseArrayPosition].weight} lb </Weight>
          <BigScreenWrapper>
            <NextButton action={ ()=>{ changeProfile(); } } profile={profile.actual.name}> Siguiente </NextButton>
          </BigScreenWrapper>
        </Container>
      </StyledBigScreen>
      <WorkoutInfo reps={profile.actual.exercises[profile.actual.exerciseArrayPosition].reps} tempo={profile.actual.exercises[profile.actual.exerciseArrayPosition].tempo} restTime={profile.actual.exercises[profile.actual.exerciseArrayPosition].restTime} />
    </>
  );
};
export default BigScreen;
