import React, { Component, createRef } from 'react'
import { Local } from './context/themeContext';

class Weather extends Component {
    state = {
        text: '',
    }

    weatherInput=createRef()

    getWeather=(e) => {
        e.preventDefault()
        this.setState(() => ({
                text: `Weather in ${this.weatherInput.current.value} is Cool `,
            }))
    };

    render() {
        const { text } = this.state
        return (
          <div>
            <h1>Weather Check</h1>
            <form onSubmit={this.getWeather}>
              <input type="text" placeholder="enter a city name" ref={this.weatherInput} />
              <button type="submit">Get Weather</button>
            </form>
            <Local.Consumer>
              { (value) => (
                <div>
                  <h1 style={{ color: value.color }}>{text}</h1>
                </div>
                        )}

            </Local.Consumer>
          </div>
        )
    }
}

export default Weather
