import { useLocation } from 'react-router-dom';
import ShowPosts from './ShowPosts';
import { useContext } from "react";
import UserContext from "../../context/userContext.js";

const Profile = () => {
    // const { state } = useLocation();

    const { user } = useContext(UserContext);

    const {_id, username, followers, following} = user;

    return (
        <div id="profile">
            <div id="banner">
                <div id="banner-avatar">
                    <img src="./images/defaultAvatar.png" alt="" width="128vw" height="128vw" className="rounded-circle" />
                </div>
                <div id="banner-info">
                    <h1 id="user-name">{username}</h1> {/* IF NOT WORKING, GO BACK TO state.username*/}
                    {/* <button type="submit" id="follow-btn" className="btn btn-primary shadow md-body rounded">Follow</button> */}
                </div>
            </div>
            <ShowPosts userId={ _id } />
        </div>
    )
}

export default Profile;

