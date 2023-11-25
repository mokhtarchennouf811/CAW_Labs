import React, { useState } from 'react';

const SubApp = () => {
  const [clickedButtons, setClickedButtons] = useState([false, false, false]);

  const handleButtonClick = (index) => {
    const newClickedButtons = [...clickedButtons];
    newClickedButtons[index] = !newClickedButtons[index];
    setClickedButtons(newClickedButtons);
  };

  return (
    <div>
      {clickedButtons.map((clicked, index) => (
        <div key={index}>
          <button onClick={() => handleButtonClick(index)}>Button{index + 1}</button>
          <p>{clicked && `Button #${index + 1} was clicked`}</p>
        </div>
      ))}
    </div>
  );
};

export default SubApp;
