import "../style/styles.css";
import { Link } from "react-router-dom"
import Arrow from "./icons/arrow";

export default function ConfigChooser () {

    return (

        <div className="configchooser">
            <div className="devices">
            <h1>Konfigurator</h1>
            <p>Wähle das Produkt, wofür du eine Konfigurationsdatei erstellen möchtest:</p>

            <Link to="fortigate"><Arrow /> Fortigate</Link>
            </div>
            <div className="contact">
                <p>für Änderungen oder andere Anliegen kann ein Mail an <Link to='javascript:void(0)'
                    onClick={() => window.location = 'mailto:c.hernandez@smartdynamic.ch'}>c.hernandez@smartdynamic.ch 
                    </Link>
               &nbsp; gemacht werden</p>
            </div>
        </div>
    );
}