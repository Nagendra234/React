import React, { Component,createRef } from 'react'

export class Todo extends Component {
    state={
        todolist:[]
    }

    todoInput=createRef()

    addTodo=(e)=>{
        e.preventDefault()
        this.setState(({todolist})=>({
            todolist:[...todolist,{text:this.todoInput.current.value,id:new Date().getTime()}]
            
    }))
}
    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.addTodo}>
                    <input type="text" ref={this.todoInput}/>
                    <button type="submit">Add Todo</button>
                </form>
                {this.state.todolist.map((item)=>{
                    return(
                        <div key={item.id}>
                            <h1>{item.text}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Todo
