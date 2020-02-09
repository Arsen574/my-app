import React from 'react';
import classes from './UserPage.module.css'
import MyPost from "./MyPosts/MyPost";
import ProfileInfo from "./Profileinfo/Profileinfo";


function UserPage(props) {

    return (

        <div>
            <ProfileInfo/>
            <MyPost dataPosts={props.data.dataPosts} newText={props.data.newText} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>
        </div>
    );
}

export default UserPage;
