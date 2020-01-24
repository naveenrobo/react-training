import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    handleChange = (event) => {
        let name = event.target.name
        this.setState({ [name]: event.target.value });
    }

    render() {
        const { addTodo } = this.props;
        return (
            <form >
                <label htmlFor="newtodo"></label>
                <input type="text" id="newtodo" onChange={this.handleChange} name="name" />
                <button type="button" name="addbutton" value="add" onClick={(e) => {
                    e.preventDefault();
                    addTodo(this.state)
                }}>add</button>
            </form >
        )
    }
}

export default TodoForm;