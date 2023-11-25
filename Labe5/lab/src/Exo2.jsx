import React from "react";
import DisplayTab from "./exo2/DisplayTab";
import Dt2 from "./exo2/DT_step2";

const Exo2 = () => {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "orange", "banana"];

  return (
   <div>
     <h1>Exercice 02</h1>
    <div style={{display:"flex" , flexDirection:"row",gap:"20",justifyContent:"center"}}>  
      <div>
        <h3>tab1 </h3>
      <DisplayTab tab={tab1} />
      </div>
      <div >
        <h3>tab2 </h3>
        <Dt2 tab={tab2} />
      </div>
    </div>
   </div>
  );
};

export default Exo2;