import React from 'react'
import './App.css'
import Form5 from './Components/Form5'
import TeamCard from './Components/TeamCard'
import Abhishek from "./assets/Abhishek.jpg"
import Lay from './Components/Lay'
import CrossBox from "./Components/CrossBox"; 

function App() {
  return (
    <>
      <div className="container_layout">

       {/* <TeamCard
          image={Abhishek}
          role="Chairman, NOC"
          name="Mr. Biswanath Chattopadhyay"
          desc="CEO, M.L. Dhunseri Petrochem Industries Pvt Ltd, Kolkata."
        /> */}

        {/* <TeamCard
          image={Abhishek}
          role="Chairman, NOC"
          name="Mr. Biswanath Chattopadhyay"
          desc="CEO, M.L. Dhunseri Petrochem Industries Pvt Ltd, Kolkata."
        />

        <TeamCard
          image={Abhishek}
          role="Vice Chairman, NOC"
          name="Prof. C. Karthikeyan"
          desc="Dean, FEAT, Annamalai University."
        /> */}

        {/* <Lay /> */}
  <>
      <CrossBox />
    </>
      </div>

     
    </>
  )
}

export default App