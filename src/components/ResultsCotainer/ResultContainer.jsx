import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultContainer.css'

const ResultContainer=({suggestedNames}) =>{
     const suggestNamejsx = suggestedNames.map((suggestedName)=>{
        return <NameCard key={suggestedName} suggestedname={suggestedName}/>
    });
    
  return (
    <div className='results-container'>
      <p>{suggestNamejsx}</p>
    </div>
  );
}

export default ResultContainer;
