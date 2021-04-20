import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {
               task: this.props.task,
               ok: this.props.ok 
            }
        }
    }

    handleTask = async event => {
        await this.setState({ task: event.target.value })
        this.props.searchTask(this.state.task)
    }

    render() {
        return (
            <form className="input">
                <input type="text" name="task" placeholder="Busca aqui tu tarea" id="input" onChange={this.handleTask} />
            </form>
        )
    } 
}

export default Search;