import React, {Fragment} from 'react';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {logout} from "../actions/auth";
import {connect} from "react-redux";

const Navbar = ({logout, isAuthenticated}) => {
    const guestLinks = () => (
        <Fragment>
            <Nav.Item>
                <Nav.Link><Link to="/login">Login</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to="/signup">Signup</Link></Nav.Link>
            </Nav.Item>
        </Fragment>
    )
    const authenticatedLinks = () => (
        <Fragment>
            <Nav.Item>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
                {/*<button onClick={logout}>Logout</button>*/}
            </Nav.Item>
            <Nav.Item>
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
            </Nav.Item>
        </Fragment>
    )
    return (
        <Nav
            activeKey="/home"
        >
            {isAuthenticated ? authenticatedLinks() : guestLinks()}
        </Nav>
    );
};
const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, {logout})(Navbar);