import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin:"20px"}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form action="">
                <input type="email" placeholder='Your Email' />
                <br/>
                <input type="password" name="" id="" placeholder='Inter Password' />
                <br/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
};

export default Login;