/* eslint-disable react/jsx-indent-props */
import React, { Component, createRef } from 'react'

export class Todo extends Component {
    state = {
        todolist: [],
        filterType: '',
    }

    todoInput=createRef()

    editTodo = (item) => {
        this.setState(({ todolist: list }) => ({
            todolist: list.map((x) => {
                if (x.id === item.id) {
                    return { ...x, isDone: !x.isDone }
                }
                return x
            }),
        }))
    }

    deleteTod = (item) => {
        this.setState(({ todolist: list }) => ({
            todolist: list.filter((x) => {
                if (x.id !== item.id) {
                    return x
                }
                return null
            }),
        }))
    }

    filterTodo=(type) => {
        this.setState({ filterType: type })
    }

    addTodo=(e) => {
        e.preventDefault()
        this.setState(({ todolist }) => ({
            // eslint-disable-next-line max-len
            todolist: [...todolist, { text: this.todoInput.current.value, isDone: false, id: new Date().getTime() }],
            // eslint-disable-next-line react/no-unused-state

    }))
}

    render() {
        const { todolist, filterType } = this.state
        return (
          <div>
            <h1>Todo List</h1>
            <form onSubmit={this.addTodo}>
              <input type="text" ref={this.todoInput} />
              <button type="submit">Add Todo</button>
            </form>

            {todolist.filter((item) => {
                        switch (filterType) {
                            case 'completed':
                                return item.isDone === true
                            case 'pending':
                                return item.isDone === false
                            default:
                                return true
                        }
                    }).map((item) => (
                      <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                              type="checkbox"
                              checked={item.isDone}
                              onChange={() => this.editTodo(item)}
                        />
                        <p style={{ flex: 1 }}>{ item.text }</p>
                        <button type="button" onClick={() => this.deleteTod(item)}>delete todo</button>
                      </div>
                    ))}
            <div>
              <button type="button" onClick={() => this.filterTodo('all')}> All</button>
              <button type="button" onClick={() => this.filterTodo('pending')}> Pending</button>
              <button type="button" onClick={() => this.filterTodo('completed')}> Completed</button>
            </div>
          </div>
        )
    }
}

export default Todo
