import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {
               task: this.props.task,
               ok: this.props.ok 
            }
        }
    }

    handleTask = event => this.setState({ task: event.target.value })

    handleNewTask = event => {
        event.preventDefault()
        this.props.addTask(this.state.task)
    }

    search = (event) => {
        event.preventDefault()
        this.props.searchTask(this.state.task)
    }

    render() {
        return (
            <form className="input">
                <input type="text" name="task" placeholder="Escribe aqui tu nueva tarea" id="input" onChange={this.handleTask} />
                <button onClick={this.handleNewTask}>New</button>
                <button onClick={this.search}>Search</button>
            </form>
        )
    } 
}

export default Form;