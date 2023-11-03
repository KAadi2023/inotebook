import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {

    const host = "http://localhost:5000"

    const [credentials, setCredentials] = useState({email: "", password:""});
    const navigate = useNavigate();

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password}), 
          });

        const json = await response.json();
        console.log(json);

        if(json.success){
            // save the auth tokens and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/");
            props.showAlert("Successfully Logged in.", 'success');
        }else{
            props.showAlert("Invalid Credentials!!", 'danger');
        }

    }

  return (
    <div className=" container my-3" style={{maxWidth: '550px'}}>
        <fieldset className="border border-primary p-2">
            <legend  className="float-none w-auto p-2">Please Login Through Your Credentials</legend>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={credentials.email} className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentials.password} className="form-control" id="password" name="password" onChange={onChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </fieldset>
    </div>
  )
}

export default Login;