import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function AccountScreen() {
    const [account, setAccount] = useState([]);
    useEffect(() => {
        fetch("http://blog.api/account")
            .then(resp => resp.json())
            .then(json => {
                json = json.sort((a, b) => {
                    return a.login.toLowerCase() > b.login.toLowerCase() ? 1 : -1
                });
                setAccount(json)
            });
    }, [])

    const navigate = useNavigate();

    return (<>
        <h1>Liste des utilisateurs</h1>

        <table className="table table-striped">
            <thead className="table">
                <tr>
                    <th scope="col">nom de connexion</th>
                </tr>
            </thead>
            <tbody>
                {account.map(account => {
                    return (<tr key={account.Id_account} onClick={()=>{navigate(`/account/${account.Id_account}`);}}>
                        <td>{account.login}</td>
                    </tr>);
                })}
            </tbody>
        </table>

    </>);
}

export default AccountScreen;