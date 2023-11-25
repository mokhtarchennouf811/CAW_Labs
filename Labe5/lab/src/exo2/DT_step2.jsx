import React, { useState } from "react";

const Dt2 = ({ tab }) => {
  const [table, setTable] = useState(tab);

  const handleItemClick = (index) => {
    const updatedTable = table.filter((_, i) => i !== index);
    setTable(updatedTable);
  };

  return (
    <ul>
      {table.map((item, index) => (
        <li key={index} onClick={() => handleItemClick(index)} style={{cursor:"pointer"}}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
};

export default Dt2;