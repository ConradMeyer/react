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
        <h3 onClick={() => this.props.delete(this.props.index)}>{this.props.task}</h3>
      </article>
    )
  }
}

export default Task;