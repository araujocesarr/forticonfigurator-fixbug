import "../style/styles.css"
import { Link } from "react-router-dom";

export default function NoPage () {

    return(
        <div className="nopage">
            <h1>Die gewünschte Seite existiert nicht!</h1>
            <h3><Link to="/"> zurück</Link></h3>
        </div>
    );
}