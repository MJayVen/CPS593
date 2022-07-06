import { fetchData } from "../../main.js"; 
import { useContext } from "react"; // hooks
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext.js";

const Login = () => {
    const navigate = useNavigate();

    const {user, updateUser} = useContext(UserContext);

    const {username, password} = user;

    const onChange = (e) => updateUser(e.target.name, e.target.value);

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
                        updateUser("authenticated", true);
                        updateUser("userId", data._id);
                        navigate("/profile");
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
export default Login;