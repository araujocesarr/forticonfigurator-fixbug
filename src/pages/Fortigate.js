import "../style/styles.css"
import { Link } from "react-router-dom";


export default function Fortigate () {



    return(
        <div className="fortigate">
            <h1>Fortigate Konfigurations Seite!</h1>
            <p>Wähle das Fortigate Model aus:</p>


            <Link to="/">Home</Link>
        </div>
    );
}