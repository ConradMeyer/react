import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        task: props.task,
        ok: props.ok 
      }
    }
  }

  componentWillUnmount() {
    //...
  }

  edit = event => this.setState({ task: event.target.value })

  delete = () => this.props.delete(this.props.index)

  editTask = () => this.props.editTask(this.props.index, this.state.task)

  check = () => this.props.checkTask(this.props.index)
  

  render() {
    return (
      <article className={`${this.props.ok}`}>
        <input type="checkbox" name="check" id="check" onClick={this.check}/>
        <h3>{this.props.task}</h3>
        <input type="text" placeholder="Edita tu tarea" onChange={this.edit}/>
        <div className="botones">
          <button onClick={this.editTask}>Edit</button>
          <button onClick={this.delete}>Delete</button>
        </div>
        <select name="prioridad" id="prioridad">
          <option value="Baja">Baja</option>
          <option value="Alta">Alta</option>
        </select>
      </article>
    )
  }
}

export default Task;