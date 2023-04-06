import "../style/styles.css"
import { Link } from "react-router-dom";
import Arrow from "../components/icons/arrow"

export default function Home () {

  return(
    <div className="home">
      <div className="devices">
        <h1>Konfigurator</h1>
        <p>Wähle das Produkt, wofür du eine Konfigurationsdatei erstellen möchtest:</p>
        <Link to="fortigate"><Arrow /> Fortigate</Link>
      </div>
      <div className="contact">
        <p>für Änderungen oder andere Anliegen kann ein Mail an &nbsp;
          <Link to='#' onClick={() => window.location = 'mailto:'}>
            c.hernandez@smartdynamic.ch 
          </Link>
        &nbsp; gemacht werden</p>
      </div>

    </div>
  );
}