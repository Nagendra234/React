import { text } from 'express'
import React, { Component,createRef } from 'react'

export class Weather extends Component {
    state={
        text:""
    }

    weatherInput=createRef()
    getWeather=(e)=> {
        e.preventDefault()
        this.setState({ text:`Weather in ${this.state.text} is Cool`})

    }

    render() {
        const { text }=this.state
        return (
            <div>
                <h1>Weather Check</h1>
                <form onSubmit={this.getWeather}>
                    <input type="text" placeholder="enter a city name" ref={this.weatherInput} />
                    <button type="submit">Get Weather</button>
                </form>
                <h1>{text}</h1>
            </div>
        )
    }
}

export default Weather
