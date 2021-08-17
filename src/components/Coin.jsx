import React, { useState, useEffect } from 'react'
import '../assets/styles/Coin.css'
import Loader from './Loader'

const Coin = () => {
  
  const [apiData, setApiData] = useState({})
  const [hash, setHash] = useState(1)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    setApiData(data)
    setLoading(false)
  }
  
  const randomizeHash = () => {
    setHash(Math.floor((Math.random() * 2)))
  }
  
  const handleClick = () => {
    setLoading(true)
    randomizeHash()
    setTimeout(() => {
      setLoading(false)
    }, 700)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="coin-container">
        <figure className="image-container">
          {loading ?
            <Loader /> :
            <img 
              className="image-result" 
              src={apiData.results[hash].image} 
              alt={`Imagen de ${apiData.results[hash].name}`}
            />
          }
        </figure>
        <div className="text-container">
          {!loading ?             
            <h2 className="name-result">{apiData.results[hash].name}</h2>:
            <h2 className="name-result">
              <div className="lds-ellipsis name-loader"><div></div><div></div><div></div><div></div></div>
            </h2>
          }
        </div>
      </div>
      <button className="button" onClick={handleClick} type="button">GOOD LUCK</button>
    </>
  )
}

export default Coin
