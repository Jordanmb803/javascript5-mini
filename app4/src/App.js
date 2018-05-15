import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
      .then(res => {
        this.setState({
          cars: res.data
        })
      })
  }

  render() {
    console.log(this.state.cars)
    return (
      <div className="App">
        <button onClick={() => this.getCars()}>Get cars</button>
        {this.state.cars.map((car, i ) => {
          return (
            <div key= {i}>
              <p>{car.id}</p>
              <p>{car.make}</p>
              <p>{car.model}</p>
              <p>{car.year}</p>
              <p>{car.color}</p>
              <p>{car.price}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
