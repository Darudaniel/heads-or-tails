import React from 'react'
import '../assets/styles/Coin.css'

class Coin extends React.Component {
  state = {
    data: {
      results:[],
    },
  }
  componentDidMount() {
    this.fetchApi()
  }

  componentDidUpdate() {

  }

  fetchApi = async() => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    this.setState({
      data: data,
      hash: Math.floor((Math.random() * 2))
    })
  }

  handleClick = () => {
    this.setState({
      hash: Math.floor((Math.random() * 2))
    })
  }

  render() {
    return(
      <>
        <div className="coin-container">
          <figure className="image-container">
          {
              this.state.data.results[this.state.hash] ?
              <img className="image-result" src={this.state.data.results[this.state.hash].image} alt={`Imagen de ${this.state.data.results[this.state.hash].name}`}/> :
              console.log('no veas la consola bro')
            }
            
          </figure>
          <div className="text-container">
            {
              this.state.data.results[this.state.hash] ?
              <h2 className="name-result">{this.state.data.results[this.state.hash].name}</h2>:
              console.log('concentrate en el juego')
            }
          </div>
        </div>
        <button className="button" onClick={this.handleClick} type="button">GOOD LUCK</button>
      </>      
    )
  }
}

export default Coin