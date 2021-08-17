import React from 'react'
import '../assets/styles/Coin.css'
import Loader from './Loader'

class Coin extends React.Component {
  state = {
    data: {
      results:[],
    },
    hash: 1,
    loading: true
  }
  async componentDidMount() {
    this.handleClick()
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    this.setState(state => {
      return {
        data: data,
        hash: Math.floor((Math.random() * 2)),
      }
    })
  }

  handleClick = () => {
    this.setState(state => {    
      return {
        hash: Math.floor((Math.random() * 2)),
        loading: true
      }  
    })
    setTimeout(() => {
      this.setState(state => {    
        return {
          hash: Math.floor((Math.random() * 2)),
          loading: false
        }  
      })
    }, 700);
  }

  render() {
    console.log(this.state.data.results)
    debugger
    return(
      <>
        <div className="coin-container">
          <figure className="image-container">
          {!this.state.loading ?
            <img 
              className="image-result" 
              src={this.state.data.results[this.state.hash].image} 
              alt={`Imagen de ${this.state.data.results[this.state.hash].name}`}
            /> :
            <Loader />
          }
            
          </figure>
          <div className="text-container">
            {!this.state.loading ?             
              <h2 className="name-result">{this.state.data.results[this.state.hash].name}</h2>:
              <h2 className="name-result">
                <div class="lds-ellipsis name-loader"><div></div><div></div><div></div><div></div></div>
              </h2>
            }
          </div>
        </div>
        <button className="button" onClick={this.handleClick} type="button">GOOD LUCK</button>
      </>      
    )
  }
}

export default Coin