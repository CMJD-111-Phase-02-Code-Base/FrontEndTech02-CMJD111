export const AJAXHandle = () =>{
  const getData = () =>{
      // Handle AJAX
      const xhr = new  XMLHttpRequest();
      xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);

      xhr.onload = ()=>{
          if(xhr.status === 200){
              console.log(xhr.responseText)
          }
      };
      xhr.onerror = () =>{
          console.log("Request Failed")
      };

      xhr.send();
     }


    return(
        <>
        <h1>This is AJAX Handle Page</h1>
        <br />
        <button onClick={getData}>Get Data</button>
        </>
    )
}