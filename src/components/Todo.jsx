import React from 'react';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    addTodo = (todo) => {
        this.setState((state, props) => {
            let data = state.data;
            if (!data.some((t) => t.name === todo.name)) {
                data.push({ ...todo, done: false });
            }
            return { data: data }
        })
    }

    removeTodo = (name) => {
        const remainTodos = this.state.data.filter((todo) => {
            if (todo.name !== name) return todo;
        });
        this.setState({ data: remainTodos })
    }

    markDone = (name) => {
        let result = this.state.data.map((todo) => {
            if (todo.name === name) {
                todo.done = true
            }
            return todo;
        })
        this.setState({ data: result })
    }

    render() {
        return (
            <div>
                <span>Add new Todo</span>
                <TodoForm addTodo={this.addTodo} />
                {
                    this.state.data.map((todo, index) => (
                        <TodoItem key={index} todo={todo} removeTodo={this.removeTodo} markDone={this.markDone} />
                    ))
                }
            </div>
        )
    }
}

export default Todo