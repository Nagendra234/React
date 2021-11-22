/* eslint-disable no-console */
import React, { Component } from 'react'

class LifeCycle extends Component {
    state = {
        counter: 3,
    }
    // --> Constructor
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    //     console.log('Consructor')
    // }
    // --> Derived

    static getDerivedStateFromProps=(props, state) => {
        console.log(props, state, 'Derived')
        return {

        }
    }

    // --> Did mount
    componentDidMount=() => {
        console.log('did mount')
    }

    shouldComponentUpdate=() => {
        console.log('should Update')
        return true
    }

    componentDidUpdate=(prevProps, prevState) => {
        console.log(prevProps, prevState)
    }

    changeIncreament=() => {
        this.setState(({ counter }) => ({
                counter: counter + 1,
            }));
        }

    // --> Render
    render() {
        console.log('render')
        const { counter } = this.state
        // eslint-disable-next-line react/prop-types
        const { name } = this.props
        return (
          <div>
            <h1>LifeCycle Methods</h1>
            <h2>{counter}</h2>
            <h3>{name}</h3>
            <button type="button" onClick={this.changeIncreament}>Increament</button>
          </div>
        )
    }
}

export default LifeCycle
