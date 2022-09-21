import { useState, useEffect } from "react";

function ThemeScreen() {

    const [theme, setTheme] = useState([]);
    useEffect(() => {
        fetch("http://blog.api/theme")
            .then(resp => resp.json())
            .then(json => {
                json = json.sort((a, b) => {
                    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
                });
                setTheme(json)
            });
    }, [])


    return (<>
        <h1>Liste des thèmes</h1>

        <table className="table table-striped">
            <thead className="table">
                <tr>
                    <th scope="col">titre</th>
                    <th scope="col">source de l'image</th>
                </tr>
            </thead>
            <tbody>
                {theme.map(theme => {
                    return (<tr key={theme.Id_theme}>
                        <td>{theme.title}</td>
                        <td>{theme.img_src}</td>
                    </tr>);
                })}
            </tbody>
        </table>

    </>);
}

export default ThemeScreen;