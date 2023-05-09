import React from 'react'

import cake from '../images/cake.jpg'

const About = () => {
  return (
    <>
      <div className="container2">
        <div className="lena-image">
          <img src={cake} alt="a woman decorating a cake" />
        </div>
        <div className="paragraph">
          <h1>Lena Wamugunda, Owner</h1>
          <br />
          <p>
            With Baecakes, we go beyond simply baking delicious treats – we
            create edible works of art that are as stunning as they are
            scrumptious. Whether you're planning a special occasion, surprising
            a loved one, or simply treating yourself to a little sweetness.
            <br />
            <br />
            Our commitment to quality extends beyond our delectable delights. At
            Baecakes, we pride ourselves on providing exceptional customer
            service.
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  )
}
export default About
