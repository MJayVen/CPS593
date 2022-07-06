import { Outlet, Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import { useContext, Fragment } from "react";

function Navbar(props) {
    const { user } = useContext(UserContext);

    const authenticated = (
        <Fragment>
            <Link className="navbar-brand" to="/Profile">
                    <img src="./images/defaultAvatar.png" alt="" width="64px" height="64px" className="rounded-circle border border-dark border-2 d-inline-block align-text-top" />
                </Link>
                <Link className="username nav-link" to="/Profile">{user.username}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        </Fragment>
    );

    const guest = (
        <Fragment>
            <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/Login" id="loginBtn" className="btn btn-primary btn-lg shadow md-body rounded" role="button" aria-pressed="true">Log In</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Register" id="registerBtn" className="btn btn-secondary btn-lg shadow md-body rounded" role="button" aria-pressed="true">Register</Link>
                        </li>
                        {/* <li id="savedPosts" className="nav-item">
                        <a className="nav-link" href="#">Saved Posts</a>
                        </li>*/}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                </div> 
        </Fragment>
    )

    return (
        <div className="container border-start border-end border-bottom rounded-bottom">
            <header className="navbar navbar-expand-sm static-top border-bottom">
                { user.authenticated ? authenticated : guest}
            </header>
            <Outlet />
        </div>
    );
}


export default Navbar;
