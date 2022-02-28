import React from 'react'
import '../Scss/Certification.scss'
import certi from '../Assets/certificate.png'

export const Certification = () => {
  return (
    <>
    <section>
    <div className="heading">
      Certification
     <hr />
    </div>

    <div className="cols">
    <img src={certi} alt="certificate" />
    <h1>Achieved Excellence and Proficiency in the Domain</h1>
    </div>
    
    </section>
    </>
  )
}

