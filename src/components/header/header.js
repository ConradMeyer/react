import React from 'react';
// import header from'./header.css';

// const Header = props => <header>HEADER {typeof props.order === "string" ? props.order : `${props.order.id} ${props.order.name}`}</header>

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="header">
                <h1>
                    Hola Mundo React
                </h1>
            </header>
        )
    }
}

export default Header;