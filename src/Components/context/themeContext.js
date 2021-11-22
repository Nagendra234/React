/* eslint-disable react/prop-types */
import React, { Component, createContext } from 'react'

export const Local = createContext()

class ThemeContext extends Component {
    state = {
        color: 'red',
    }

    render() {
        const { color } = this.state
        const { children } = this.props
        return (
          <div>
            <Local.Provider value={{ color, changeTheme: () => this.setState({ color: 'blue' }) }}>
              {children}
            </Local.Provider>
          </div>
        )
    }
}

export default ThemeContext
