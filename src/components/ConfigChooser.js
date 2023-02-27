import "../style/styles.css";
import { Link } from "react-router-dom"

export default function ConfigChooser () {
    return (
        <div className="configchooser">
            <h1>Configurator</h1>
            <p>Choose the product you want to create a config file for:</p>
            <Link to="fortigate">Fortigate</Link>
        </div>
    );
}