import ShowPosts from './ShowPosts';
import { useContext, Fragment } from "react";
import UserContext from "../../context/userContext.js";

const Profile = () => {

    const { user } = useContext(UserContext);

    const authenticated = (
        <Fragment>

            <div id="banner">
                <div id="banner-avatar">
                    <img src="./images/defaultAvatar.png" alt="" width="128vw" height="128vw" className="rounded-circle" />
                </div>
                <div id="banner-info">
                    <h1 id="user-name">{user.username}</h1>
                    {/* <button type="submit" id="follow-btn" className="btn btn-primary shadow md-body rounded">Follow</button> */}
                </div>
            </div>
            <ShowPosts userId={user.userId} />

        </Fragment>
    )

    const guest = (
        <Fragment>
            <div>
                Please login or register to continue
            </div>
        </Fragment>
    )

    return (
        <div id="profile">
            {user.authenticated ? authenticated : guest}
        </div>

    )
}

export default Profile;