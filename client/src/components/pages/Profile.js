import { useLocation } from 'react-router-dom';
import ShowPosts from './ShowPosts';

const Profile = () => {
    const { state } = useLocation();
    const {_id, username, followers, following} = state;

    return (
        <div id="profile">
            <div id="banner">
                <div id="banner-avatar">
                    <img src="./images/defaultAvatar.png" alt="" width="128vw" height="128vw" className="rounded-circle" />
                </div>
                <div id="banner-info">
                    <h1 id="user-name">{state.username}</h1>
                    {/* <button type="submit" id="follow-btn" className="btn btn-primary shadow md-body rounded">Follow</button> */}
                </div>
            </div>
            <ShowPosts userId={ _id }/>
        </div>
    )
}

export default Profile;

