import React, { useState } from 'react';

const ToggleButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle button </button>
       <p>{clicked ? 'Not Clicked' : 'Clicked'}</p>
    </div>
  );
};

export default ToggleButton;