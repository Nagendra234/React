import React, { Component, createContext } from 'react'

export const loadContext = createContext()

export default class loadingContext extends Component {
    state={
        status: [],
    }
    // eslint-disable-next-line lines-between-class-members
    render() {
        return (
          <loadContext.Provider>
            {this.props.children}
          </loadContext.Provider>
        )
    }
}
