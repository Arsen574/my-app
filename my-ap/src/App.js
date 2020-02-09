import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import UserPage from './Components/UserPage/UserPage';
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";


function App(props) {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">

                <Route path={"/Dialogs"} render={() => <Dialogs data={props.state.dialogsPage}/>}/>
                <Route path={"/UserPage"} render={() => <UserPage data={props.state.profilePage} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>}/>

            </div>
        </div>
    );
}

export default App;