import React, {useState} from 'react';
import {Link} from "@reach/router";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [displayName, setDisplayName] = useState("");
    const createUserWithEmailAndPassHandler = (e,email,password) => {
        e.preventDefault();
        setEmail("");
        setPass("");
        setDisplayName("");
    };
    const onChangeHanler = e => {
        let {name, value} = e.currentTarget;
        if (name  === "userEmail") {
            setEmail(value);
        }
        else if (name === "userPassword"){
            setPass(value);
        }
        else if (name === "displayName") {
            setDisplayName(value);
        }
    };
    return (
        <div>
            <h1>ĐĂNG KÍ</h1>
            <div>
                <form>
                  <label htmlFor="displayName">Display name:</label>
                  <input type="text"
                    name="displayName"
                    id="displayName"
                    value={displayName}
                    placeholder="E.g. Faira"
                    onChange={(e) => {onChangeHanle(e)}}/>

                  <label htmlFor="userEmail">Email: </label>
                  <input type="email"
                        name="userEmail"
                        id="userEmail"
                        value={email}
                        placeholder="E.g. phatlee8888@gmail.com"
                        onChange={(e) => {onChangeHanle(e)}}/>

                    <label htmlFor="userPassword">Password:</label>
                    <input type="password"
                        name="userPassword"
                        id="userPassword"
                        value={password}
                        placeholder="Your Password"
                        onChange={(e) => {onChangeHanle(e)}}/>

                    <button onClick={(e) =>{createUserWithEmailAndPassHandler(e,email,password);}}>ĐĂNG KÍ</button>
                </form>
                <p>or</p>
                <button >ĐĂNG NHẬP BẰNG GOOGLE</button>
                <p>Already have an account?
                <Link to="/"> Sign in here</Link>
                </p> {" "}
                
            </div>
        </div>
    )
} 

export default SignUp;