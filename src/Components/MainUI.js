import React from 'react';
import {Router} from '@reach/router';
import {SignIn} from '../Components/SignIn'
import {SignUp} from '../Components/SignUp'
import {PassReset} from '../Components/PassReset'
import {ProfileDisplay} from '../Components/ProfileDisplay'

function MainUI () {
    const user = null;
    return (
        user ?
        <ProfileDisplay/>
        :
        <Router>
            <SignIn path="/"/>
            <SignUp path="signUp" />
            <PassReset path= "passReset"/>
        
        </Router> 

    );
}
export default MainUI;