import React, {useState} from 'react';

export default function Login({setUser}){
    const [username, setUsername] = useState('');

    function handleUsername(evt){
        setUsername(evt.target.value);
    }

    return (        
        <form onSubmit={e => {e.preventDefault(); setUser(username)}}>
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor="login-username">Username:</label>
                <input type="text" className="form-control" value={username} onChange={handleUsername} name="login-username" id="login-username"/>
            </div>
            <div className="form-group">
                <label htmlFor="login-password">Password:</label> 
                <input type="password" className="form-control" name="login-password" id="login-password"/>
            </div>
            <input type="submit" className="btn btn-primary" value="Login" disabled={username === 0} />       
        </form>
    )

}