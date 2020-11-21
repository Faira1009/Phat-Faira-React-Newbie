import React, {useState} from 'react';
import {Link} from '@reach/router';
import '../assets/css/signInCss.css'

function SignIn () {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const signInWithEmailAndPassHandler = (e,email,password) => {
        e.preventDefault();
    };
    const onChangeHandler = (e) => {
        let {name,value} = e.currentTarget;
        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name ='userPassword'){
            setPass(value);
        }
    };
    return (
        <div className="bigDiv">
            <h1 className="signIn-title" >ĐĂNG NHẬP</h1>
            <div className="smallDiv">
                <form className="signIn-right">
                <label htmlFor="userEmail">Email:</label>
                <input  type="email"
                name ="userEmail"
                value = {email}
                placeholder = "e.g. phatlee8888@gmail.com"
                id ="userEmail"
                onChange = {(e) => onChangeHandler(e)}
                />
                <br/>
                <label htmlFor="userPassword">Password:</label>
                <input type="password" 
                name="userPassword"
                value={password}
                placeholder="type in your password"
                id="userPassword"
                onChange = {(e) => onChangeHandler(e)} />
                <br/>
                <button onClick = {(e) => {signInWithEmailAndPassHandler(e, email, password)}}> ĐĂNG NHẬP</button>
            </form>
            <p>or</p>
            <button>ĐĂNG NHẬP BẰNG TÀI KHOẢN GOOGLE</button>
            <p>
                Don't have an account? {" "}
                <Link to="signUp">
                    ĐĂNG KÍ TẠI ĐÂY
                </Link>
                <br/> {" "}
                <Link to="passReset">
                    QUÊN MẬT KHẨU?
                </Link>
            </p>
            </div>
            
        </div>
    )
};
export default  SignIn;