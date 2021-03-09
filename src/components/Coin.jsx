import React from 'react'
import '../assets/styles/Coin.css'
import Loader from '../components/Loader'

class Coin extends React.Component {
  state = {
    data: {
      results:[],
    },
    hash: 1,
    loading: true
  }
  async componentDidMount() {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    this.setState({
      data: data,
      hash: Math.floor((Math.random() * 2)),
      loading: false
    })
  }

  handleClick = () => {
    this.setState({      
      hash: Math.floor((Math.random() * 2)),
    })
  }

  render() {
    return(
      <>
        <div className="coin-container">
          <figure className="image-container">
          {!this.state.loading ?
            <img className="image-result" src={this.state.data.results[this.state.hash].image} alt={`Imagen de ${this.state.data.results[this.state.hash].name}`}/> :
            <Loader />
          }
            
          </figure>
          <div className="text-container">
            {
              this.state.data.results[this.state.hash] ?
              <h2 className="name-result">{this.state.data.results[this.state.hash].name}</h2>:
              console.log('No mires la consola')
            }
          </div>
        </div>
        <button className="button" onClick={this.handleClick} type="button">GOOD LUCK</button>
      </>      
    )
  }
}

export default Coin