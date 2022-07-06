import { fetchData } from "../../main.js"; 
import { useContext } from "react"; // hooks
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext.js";

const Register = () => {
    const navigate = useNavigate();

    const {user, updateUser} = useContext(UserContext);

    const {username, password, password2} = user;
    
    const onChange = (e) => updateUser(e.target.name, e.target.value);

    const onSubmit = (e) => {
        e.preventDefault(); // prevents reloading the page

        fetchData("/user/register", 
                   // no need to send password2, since that's checked on front end
                   {
                        username,
                        password 
                   },
                    "POST")
                .then((data) => {
                    if(!data.message) { // only get sent a message when error exists 
                        updateUser("authenticated", true);
                        navigate("/profile", { state: data });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

    }

    return (
        <div className="signInContainer">
            <div id="registerContainer" className="container-sm">
                <h1><u>Register</u></h1>
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
                    <div className="mb-3">
                        <label htmlFor="password2" className="form-label">Confirm Password</label>
                        <input type="password" 
                               className="form-control" 
                               id="password2" 
                               name="password2" 
                               onChange={onChange}
                               value={password2} 
                               required />
                    </div>
                    <button type="submit" className="btn btn-primary shadow md-body rounded">Register</button>
                </form>
            </div>
        </div>

    );
}
export default Register;