import { fetchData } from "../../main.js"; 
import { useState } from "react"; // hooks
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const {username, password} = user;

    const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();

        fetchData("/user/login",
                  {
                    username,
                    password
                  },
                  "POST")
                .then((data) => {
                    if(!data.message) {
                        console.log(data);
                        navigate("/profile", { state: data });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
    }

    return (
        <div className="signInContainer">
            <div id="loginContainer" className="container-sm">
                <h1><u>Log In</u></h1>
                <form onSubmit={onSubmit}> 
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" 
                               className="form-control" 
                               id="username" 
                               name="username"
                               onChange={onChange}
                               value={username}
                               required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" 
                               className="form-control" 
                               id="password" 
                               name="password"
                               onChange={onChange}
                               value={password}
                               required />
                    </div>
                    <button type="submit" className="btn btn-primary shadow md-body rounded">Log In</button>
                </form>
            </div>
        </div>

    );
}
export default LoginForm;