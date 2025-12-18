import { useState } from 'react';
import { sculptureList } from '../utils/Gallery-data.js'

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleShowMore(){
    setShowDetails(!showDetails);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>

      <h2> <i>{sculpture.name}</i> by {sculpture.artist} </h2>

      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
    
      <button onClick={handleShowMore}>
        {showDetails ? 'hide' : 'show'} details
      </button>
      {/* {showDetails && <p>Show</p>} */}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}