import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


const AccountDetailScreen = () => {

    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://blog.api/appUser/"+id, {
            method: "POST",
            body: JSON.stringify({with:['account','role']})
    })
            .then(resp => resp.json())
            .then(json => {
                setUser(json)
            });
    }, [id]);

    return (<>
        <h1>Détail de l'utilisateur : {user?.pseudo} </h1>
        <b>login :</b><p> {user?.account?.login}</p>
        <b>rôle :</b><p> {user?.role?.title}</p>

    </>);
}

export default AccountDetailScreen