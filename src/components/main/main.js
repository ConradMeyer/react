import React from 'react';

import Form from '../form/form';
import Task from '../tasks/tasks'
import getTasks from '../../data/dataProvider'


class Main extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          tasks: [],
          user: this.props.user || "Conrad",
          limit: 10
        }
    }

    async componentDidMount() {
        const newtasks = await getTasks()
    
        this.setState({ tasks: [...this.state.tasks, ...newtasks] });
    }

    componentDidUpdate() {
        //...
    }

    drawTasks = () => {
        if (this.state.tasks.length > 0) {
          return this.state.tasks.map((item, index) =>
            <Task task={item.task} index={index} delete={this.deleteTask} />
          )
        }
        return <h3>No hay tareas pendientes</h3>
    }

    addTask = task => {
        this.setState({
            tasks: [...this.state.tasks, { task }]
        })
    }

    deleteTask = (i) => {
        let tasks = this.state.tasks.filter((el, index) => index !== i)
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
            <main className="main">
                <h2>Bienvenido, {this.state.user ? this.state.user : "Anónimo"}</h2>
                <Form addTask={this.addTask}/>
                <h2 className="tareas">LISTA DE TAREAS</h2>
                {this.drawTasks()}
            </main>
        )
    }
}

export default Main;