import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: ""
        }
    }

    handleTask = event => this.setState({ task: event.target.value })

    handleNewTask = event => {
        event.preventDefault()
        this.props.addTask(this.state.task)
    }

    render() {
        return (
            <form className="input">
                <input type="text" name="task" placeholder="Escribe aqui tu nueva tarea" id="input" onChange={this.handleTask} />
                <button onClick={this.handleNewTask}>New Task</button>
            </form>
        )
    } 
}

export default Form;