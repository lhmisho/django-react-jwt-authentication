import React, {useState} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

const Login = () => {
    const [formData, setFormdata] = useState({
        username: '',
        password: ''
    })
    const {username, password} = formData
    const onChangeHandler = e => setFormdata({...formData, [e.target.name]: e.target.value})
    const onSubmitHandler = e => {
        e.preventDefault()
        // login (username, password)
    }
    return (
        <div className="container mt-5">
            <form onSubmit={e => onSubmitHandler(e)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username"
                        onChange={(e) => onChangeHandler(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        minLength="4"
                        onChange={(e) => onChangeHandler(e)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <p className="mt-3">Don't have any account? <Link to="/signup">Signup</Link></p>
                <p className="mt-3">Forgot your password?<Link to="/reset-password">Reset Password</Link></p>
            </form>
        </div>
    );
};

export default connect(null, {})(Login);