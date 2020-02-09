let store = {
    _state: {
        profilePage: {
            dataPosts: [
                {id: 1, message: 'edfasdfa', likesCount: '11'},
                {id: 1, message: 'edfasdfa', likesCount: '11'}
            ],
            newText: ''
        },
        dialogsPage: {
            data: [
                {id: 0, name: 'Dimich'},
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Valera'}
            ],
            Messages: [

                {id: 1, message: 'back'},
                {id: 0, message: 'hi'},
                {id: 3, message: 'sadfasf'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'}
            ]
        }
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state wasa changed');
    },
    addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newText,
            likesCount: 0
        };

        this._state.profilePage.dataPosts.push(newPost);
        this._state.profilePage.newText = '';
        this._callSubscriber(this._state);

    },
    changeNewPostText(newText) {
        this._state.profilePage.newText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }

};

export default store;
