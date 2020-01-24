import React from 'react';

class TodoItem extends React.Component {
    render() {
        const { removeTodo, markDone, todo } = this.props;
        return (
            <li>
                {
                    todo.done ? <span style={{ color: 'red', textDecoration: 'line-through' }}>{todo.name}</span> : <span>{todo.name}</span>
                }
                <button onClick={e => {
                    e.preventDefault();
                    markDone(todo.name)
                }}>✓</button>
                <button onClick={e => {
                    e.preventDefault();
                    removeTodo(todo.name)
                }}>x</button>
            </li>
        )
    }
}

export default TodoItem