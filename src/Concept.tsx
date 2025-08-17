export const Concept = () =>{
    let num = 0;

    const handleMax = () =>{
       num++
       console.log("Num is: ",num)
    }
    const handleMin = () =>{
        num--
        console.log("Num is: ",num)
    }

return(
    <>
    <h1 style={{marginLeft: '40px'}}>{num}</h1>
    <button onClick={handleMax}>Max +</button>
    <button onClick={handleMin}>Min -</button>
    </>
);
  
} 