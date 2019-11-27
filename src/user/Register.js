import React, {useState} from 'react';

export default function Register({setUser}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    function handleUsername(evt){
        setUsername(evt.target.value);
    }

    function handlePassword(evt){
        setPassword(evt.target.value);
    }

    function handlePasswordRepeat(evt){
        setPasswordRepeat(evt.target.value);
    }

    return (
        <form onSubmit={e => {e.preventDefault(); setUsername(username)}}>
            <h2>Register</h2>
            <div className="form-group">
                <label htmlFor="register-username">Username:</label>
                <input type="text" value={username} onChange={handleUsername} className="form-control" name="register-username" id="register-username"/>
            </div>
            <div className="form-group">
                <label htmlFor="register-password">Password:</label> 
                <input type="password" value={password} onChange={handlePassword} className="form-control" name="register-password" id="register-password"/>
            </div>
            <div className="form-group">
                <label htmlFor="register-password-repeat">Repeat Password:</label> 
                <input type="password" value={passwordRepeat} onChange={handlePasswordRepeat}  className="form-control" name="register-password-repeat" id="register-password-repeat"/>
            </div>
            <input type="submit" value="Register" disabled={username.length === 0 || password === 0 || password !== passwordRepeat} className="btn btn-primary"/>       
        </form>
    )
}