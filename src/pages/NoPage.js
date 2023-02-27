import "../style/styles.css"
import { Link } from "react-router-dom";

export default function NoPage () {

    return(
        <div className="nopage">
            <h1>Page doesn't exist</h1>
            <h3>Return to <Link to="/">Home</Link></h3>
        </div>
    );
}