import "./Menu.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faAngleRight, faLaptop, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faStar, faClock, faTrashCan} from "@fortawesome/free-regular-svg-icons";
import {New} from "../New/New";

export const Menu = function () {

    function displayNew () {
        document.getElementById("New").style.display = "block";
    }

    return (
        <div className="Menu">
            <button id="buttonNew" onClick={displayNew}><FontAwesomeIcon icon={faPlus} className="icon"/> Nouveau</button>
            <a><span><FontAwesomeIcon icon={faAngleRight} /></span> <FontAwesomeIcon icon={faGoogleDrive} className="icon" /> Mon Drive</a>
            <a><span><FontAwesomeIcon icon={faAngleRight} /></span> <FontAwesomeIcon icon={faLaptop} className="icon" /> Ordinateurs</a>
            <a><FontAwesomeIcon icon={faUserGroup} className="icon" /> Partagés avec moi</a>
            <a><FontAwesomeIcon icon={faClock} className="icon" /> Récents</a>
            <a><FontAwesomeIcon icon={faStar} className="icon" /> Suivis</a>
            <a><FontAwesomeIcon icon={faTrashCan} className="icon" /> Corbeille</a>
            <New />
        </div>
    );
}