import React from "react";

function Login({login, setClickedRegister}) {
    const [user, setUser] = React.useState({
        email: '',
        password: ''
    })
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        login(user)
    }
    return (
        <div className="container">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={onChange} />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        <button onClick={()=>{setClickedRegister(true)}}>Registrarse</button>
        </form>
        </div>
    )
    }
export default Login;