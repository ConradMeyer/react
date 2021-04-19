import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    //...
  }

  render() {
    return (
      <article>
          <h3>{this.props.task}</h3>
        <div className="botones">
          <button onClick={() => this.props.edit(this.props.index)}>Edit</button>
          <button onClick={() => this.props.delete(this.props.index)}>Delete</button>
        </div>
      </article>
    )
  }
}

export default Task;