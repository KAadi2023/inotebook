import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp(props) {
    const host = "http://localhost:5000";

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });
    const navigate = useNavigate();

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (parseInt(credentials.password) === parseInt(credentials.cpassword)) {
            console.log('matched');
            const response = await fetch(`${host}/api/auth/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                }),
            });

            const json = await response.json();
            console.log(json);
            if (json.success) {
                // save the authtoken and redirect
                localStorage.setItem("token", json.authtoken);
                navigate("/login");
                props.showAlert("Account Created Successfully.", "success");
            }
        }
        else {
            props.showAlert("Password must be same !!", "danger");
        }
    };

    return (
        <div className="container my-3" style={{maxWidth: '550px'}}>
            <fieldset className="border border-primary p-2">
                <legend className="float-none w-auto p-2">Please Fill up your details to create an account</legend>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            onChange={onChange}
                            aria-describedby="nameHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={onChange}
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={onChange}
                            minLength={5}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="cpassword"
                            name="cpassword"
                            onChange={onChange}
                            minLength={5}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </fieldset>
        </div>
    );
}

export default SignUp;
