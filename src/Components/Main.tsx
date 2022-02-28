import React from 'react'
import '../Scss/Main.scss'
import image from '../Assets/Rajsa.png'

export const Main = () => {
  return (
    <>
    <div className="instructor">
      <div className="boxe">
        <img className="clipPath" src={image} alt='Instructor'></img>
        <h2>Rajesh Tak</h2>
      </div>
      <div className="boxes">
      <h1>Our Instructor</h1>
      <hr />
      <p className="specs">Certified Fitness Instructor</p>
      <p className="specs">Dietian</p>
      <p className="specs">Nutrition Expert</p>
      <p className="specs">Specialized in Cardio workout</p>
      </div>
    </div>
    </>
  )
}
