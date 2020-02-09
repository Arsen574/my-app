import React from 'react';
import Classes from './MyPost.module.css'
import "./Post/Post"
import Post from "./Post/Post";


function MyPost(props) {
    let post = props.dataPosts.map(p => <Post id={p.message} messages={p.message} count={p.likesCount}/>);
    let newPostElement = React.createRef();

    function addPost() {

        props.addPost();
    }
    
    function onPostChange() {

        let text = newPostElement.current.value;
        props.changeNewPostText(text);


    }

    return (
        <div className={Classes.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea cols="30" rows="2" onChange={onPostChange} ref={newPostElement} value={props.newText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>

                    </div>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={Classes.posts}>
                {post}
            </div>
        </div>
    );


}

export default MyPost;
