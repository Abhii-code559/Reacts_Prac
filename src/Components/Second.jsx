import React from 'react'
import Abhishek from "../assets/Abhishek.jpg"

const Second = () => {
  return (
    <>
    <h1>Welcome to My Profile 
    </h1>
    <img src={Abhishek} alt="Abhishek" height="200px" width="200px" />
    <ul type="circle">
        <li><h2>About Me-</h2> I am Abhishek kumar.I am Currently a BCA Student in Gumla Polytechnic</li>
        <li><h2>My Certifications-</h2>I have done my Certifications in Mern Stack.Ihave also Completed Java Full Stack Development</li>
        <li><h2>Master Languages-</h2>I have mastered many languages like C++,Advanced Java,DSA in java,DBMS</li>
        <li><h2>Hobbies-</h2> Ib hava an interest on Playing Cricket.I enjoy to play Mobile Games like Freefire.</li>
    </ul>
    </>
  )
}

export default Second
