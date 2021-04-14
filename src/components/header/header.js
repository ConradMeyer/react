import React from 'react';
// import header from'./header.css';

const Header = props => <header>HEADER {typeof props.order === "string" ? props.order : `${props.order.id} ${props.order.name}`}</header>

// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <header>HEADER {typeof this.props.order === "string" ? this.props.order : `${this.props.order.id} ${this.props.order.name}`}</header>
//         )
//     }
// }

export default Header;