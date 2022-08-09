import React from 'react'


function Register({register, setClickedRegister}) {
    const [user, setUser] = React.useState({
        name: '',
        email: '',
        password: ''
    })
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        register(user)
    }
    return (
        <div className="container">
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" onChange={onChange} />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={onChange} />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <button onClick={()=>{setClickedRegister(false)}}>Cancelar</button>
        </form>
        </div>
    )
    }
export default Register;
