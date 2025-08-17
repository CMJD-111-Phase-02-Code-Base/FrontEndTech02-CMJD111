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

     const getDataFetch = () =>{
         fetch("https://jsonplaceholder.typicode.com/posts")
         .then( data =>{
             console.log(data.json())
         })
         .catch(err=> console.error(err))
     }
     
    return(
        <>
        <h1>This is AJAX Handle Page</h1>
        <br />
        <button onClick={getData}>Get Data</button>
        <button onClick={getDataFetch}>Get Data fro Fetch</button>
        </>
    )
}