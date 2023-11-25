import logo from './logo.svg';
import './App.css';
import ClickMeButton from './exo1/ClickMebtn';
import ToggleButton from './exo1/ToggleBtn';
import { useState } from 'react';
import SubApp from './exo1/SubApp';
import Counter from './exo1/Counter';
function Exo1() {
  

  return (
    <div className="App">
      <h1>Exercice 01 </h1>
       <h4>etape 01</h4>
        <ul>
        <ClickMeButton/>
        </ul>
       <h4>etape 02</h4>
        <ul>
        <ToggleButton/>
        </ul>
       <h4>etape 03</h4>
        <ul>
          <SubApp/>
        </ul>
       <h4>etape 04</h4>
        <ul>
          <Counter/>
        </ul>
       
      
    </div>
  );
}

export default Exo1;
