import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tareas: [
              {
                task: "Aprender React"
              },
              {
                task: "Aprender mucho mas React"
              }
            ]
          }
    }
    delete = (item) =>{
        this.setState(this.state.tareas.filter((el, i)=> i !== el));
    }

    drawTasks = () => {
        const tasks = this.state.tareas.map(item =>
            <h3 onClick={(item)}>{item.task}</h3>
        )
  
      return tasks
    }

    newTask = (item) => {
        this.setState({
            tareas: [...this.state.tareas, {
                task: "Nueva Taska"
            }]
        });
    }
    
    render() {
        return (
            <main className="main">
                <form action="" className="input">
                    <input type="text" name="task" placeholder="Escribe aqui tu nueva tarea" id="input"/>
                    <button onClick={this.newTask} type="button">Nueva tarea</button>
                </form>
                
                <div className="tareas">
                    <h2>TO DOs</h2>
                    <div className="tareas">
                        {this.drawTasks()}
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;