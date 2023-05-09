import React, { useState, useEffect } from 'react'
import { lena } from './data'

const Cakes = () => {
  const [cakesData, setCakesData] = useState([])
  useEffect(() => {
    setCakesData(lena)
  }, [])
  return (
    <div className="cakes">
      <div className="cakes-container">
        {cakesData.map((cake, index) => (
          <div key={index} className="cake-item">
            <img src={cake.cake_url} alt={cake.name} />
            <h3 className="name">{cake.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Cakes
