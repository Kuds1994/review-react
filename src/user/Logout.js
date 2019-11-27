import React from 'react';

export default function Logout({user, setUser}){
    return (
        <form onSubmit={e => {e.preventDefault(); setUser('')}} >
            Logado como: <b> {user}, </b>
            <input type="submit" value="Sair" className="btn btn-link botao-logout"/>
        </form>
    )
}