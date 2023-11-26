import React from 'react'
import { Link } from 'react-router-dom';
import Notes from './Notes'


function Home(props) {
const{showAlert}=props;
  return (
    <>
    <div>
    <Notes showAlert={showAlert}>
    </Notes>
    </div>
      
      
      
      
    </>
  )
}

export default Home;
