import { useState } from "react";

export const Concept = () =>{
    let num = 0;
    const [numValue,setNumValue] = useState(num)

    const handleMax = () =>{
      setNumValue( prev => prev + 1)
    }
    const handleMin = () =>{
        setNumValue( prev => prev - 1)
    }

return(
    <>
    <h1 style={{marginLeft: '40px'}}>{numValue}</h1>
    <button onClick={handleMax}>Max +</button>
    <button onClick={handleMin}>Min -</button>
    </>
);
  
} 