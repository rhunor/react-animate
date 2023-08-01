import Lottie from "lottie-react"
import animationData from "./assets/animation_lks71va2.json"
import { useRef } from "react"

import './App.css'

function App() {
  
const phoneRef = useRef()
  return (
    <>
      <div>
      <h1>Create Lovely animations with Lottie</h1>
      <p>create fancy animations</p>
      <div className="flex gap-2 justify-center">
    <button>Learn More</button>
    <button>Library</button>
    <Lottie onComplete={()=>{
        phoneRef.current.goToAndPlay(45, true)
      }} lottieRef={phoneRef} animationData={animationData}/>
      </div>
    
      </div>
     
    </>
  )
}

export default App
