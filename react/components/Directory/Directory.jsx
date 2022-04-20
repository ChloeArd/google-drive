import "./Directory.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder} from "@fortawesome/free-solid-svg-icons";

export const Directory = function () {

    return(
        <div className="Directory">
            <FontAwesomeIcon icon={faFolder} className="icon"/>
            <p>Name</p>
        </div>
    );
}