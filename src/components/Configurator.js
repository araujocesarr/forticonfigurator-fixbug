import "../style/styles.css"
import { Link } from "react-router-dom";

export default function Configurator () {

  return(
    <div className="configuration">
      <h1>FortiGate Konfigurations Seite!</h1>

      <select>
        <option value="40F">40F</option>
        <option value="60F">60F</option>
        <option selected value="80F">80F</option>
        <option value="100F">100F</option>
      </select>

      <form>
      <label>
          Hostname:
          <input type="text" name="hostname" />
      </label>
        <input type="submit" value="Submit" />
      </form>

      <Link to="/">Back home</Link>
    </div>
  );
}