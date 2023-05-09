import React from 'react'
import baecakes from '../images/baecakes.mp4'

const Home = () => {
  return (
    <div className="home">
      <section className="showcase">
        <video src={baecakes} type="video/mp4" muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Introducing BaeCakes</h2>
          <h3>Where Love and Flavor Unite!</h3>
          <p>
            At Baecakes, we believe that every moment deserves to be celebrated
            with a touch of sweetness.
            <br />
            <br />
            Order from us today and let BaeCakes enchant you with a symphony of
            flavors and artistry. You deserve a little sweetness in your life,
            and Baecakes is here to deliver pure bliss in every bite.
            <br />
          </p>
        </div>
      </section>
    </div>
  )
}
export default Home
