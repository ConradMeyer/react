import React from 'react';

import Form from '../form/form';
import Task from '../tasks/tasks'
import getTasks from '../../data/dataProvider'
import Search from '../search/search';


class Main extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          tasks: [],
          user: this.props.user || "Conrad",
          filterText: "",
          newTask: false
        }
    }

    async componentDidMount() {
        const newtasks = await getTasks()
        this.setState({ tasks: [...this.state.tasks, ...newtasks] });
    }

    componentDidUpdate() {
        
    }

    drawTasks = () => {
        if (this.state.tasks.length > 0) {
          return this.state.tasks
                    .filter(item => item.task.toLowerCase().includes(this.state.filterText.toLowerCase()))
                    .map((item, index) =>
                        <Task 
                            task={item.task} index={index} ok={item.ok} delete={this.deleteTask} editTask={this.editTask} checkTask={this.checkTask} key={index} 
                        />
                    )
        }
        return <h3>No hay tareas pendientes</h3>
    }

    addTask = task => {
        this.setState({
            tasks: [...this.state.tasks, { task }]
        })
    }

    editTask = (i, input) => {
        const editTask = [...this.state.tasks]
        editTask[i].task = input
        this.setState({ tasks: editTask })
    }

    deleteTask = (i) => {
        let tasks = this.state.tasks.filter((el, index) => index !== i)
        this.setState({
            tasks: tasks
        })
    }

    checkTask = (i) => {
        const checkTask = [...this.state.tasks]
        checkTask[i].ok = !checkTask[i].ok
        this.setState({ tasks: checkTask })
    }

    searchTask = (text) => {
        this.setState({filterText: text})
    }

    change = () => {
        const newTask = !this.state.newTask
        this.setState({ newTask: newTask })
    }

    render() {
        return (
            <main className="main">
                <h2>Lista de tareas de {this.state.user ? this.state.user : "Anónimo"}</h2>
                {this.state.newTask ? <Form addTask={this.addTask} searchTask={this.searchTask}/> : <Search addTask={this.addTask} searchTask={this.searchTask}/>}
                <h2 className="tareas">TAREAS:</h2>
                {this.drawTasks()}
                <button className="newTask" onClick={this.change}>Search/Create</button>
            </main>
        )
    }
}

export default Main;