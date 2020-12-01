import React from 'react';
import '../../assets/Body/SignUpIn.css'



class SignUp extends React.Component {
    constructor(props) { 
        super(props)
    }
    render (){
        return(
            <div className="SignUpInDiv">
                <div className="picLogo">
                    Hình
                    hình hình Hình
                    </div>
                <div className="SignUpIn">
                    <div className="Title">logo</div>
                    <div className="SignForm">
                        <input className="SignFormEle" type="text" placeholder="EMAIL"/>
                        <input className="SignFormEle" type="text" placeholder="PASSWORD"/>
                        </div>
                    <div className="SignMore">more</div>
                </div>
            </div>
        )
    }
}

export default SignUp;