import React from 'react';

import Classes from"./ProfileInfo.module.css"


function ProfileInfo() {
    return (
        <div>
            <div>
                <img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'/>
                </div>
                <div className={Classes.descriptionBlock}>
                    ava+description
                </div>
            </div>


    );
}

export default ProfileInfo;
