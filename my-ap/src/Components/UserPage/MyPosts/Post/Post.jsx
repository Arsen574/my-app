import React from 'react';
import classes from './Post.module.css'

function Post(props) {
    return (
        <div>
            <div className={classes.item}>
                <img src="http://www.myiconfinder.com/uploads/iconsets/256-256-53e157058ac55ba046aa84778fca5e7e-user.png" alt=""/>
                {props.messages}
                <div >
                    <span>like</span>
                    {props.count}

                </div>
            </div>

        </div>
    );


}

export default Post;
