import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"
function App() {
  const [jokes, setjokes] = useState([])
   useEffect(()=>{
       axios.get("/api/jokes")
       .then((res)=>{
           setjokes(res.data);
       })
       .catch((err)=>{
         console.log(err);
         res.send(err);
       })
   })
  return (
    
      <div >
      
      <h1>Welcome to My Project</h1>
       <h3>jokes:{jokes.length}</h3>
       {
          jokes.map((joke,index)=>{
            return(
            <div key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.description}</p>
             </div>
            );
          })

       }
      
      </div>
        
  
  )
}

export default App
