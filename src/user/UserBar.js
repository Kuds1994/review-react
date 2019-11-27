import React from 'react';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

export default function UserBar({user, setUser}){
    

    if (user) {
        return <Logout user={user} setUser={setUser} />        
    } else {
        return (
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-4">
                        <Login setUser={setUser} /> 
                    </div>    
                    <div className="col-md-4">
                        <Register setUser={setUser}  />
                    </div>
                </div>
            </div>
        )
    }
}