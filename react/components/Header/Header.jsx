import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons'
import {LogoutGoogle} from "../LogoutGoogle/LogoutGoogle";

export const Header = function ({sessionGoogle}) {

    function displayAccount () {
        document.getElementById("accountGoogle").style.display = "flex";
    }

    function notDisplayAccount () {
        document.getElementById("accountGoogle").style.display = "none";
    }


    return (
        <header className="Header">
            <FontAwesomeIcon icon={faGoogleDrive} className="logoDrive" />
            <a href="/">Drive</a>

            <span id="logoSearch"><FontAwesomeIcon icon={faSearch} /></span>
            <input id="inputSearch" type="text" placeholder="Rechercher dans Drive"/>
            <span id="logoSliders"><FontAwesomeIcon icon={faSliders} /></span>

            <div className="flex-end">
                <img className="pictureUser" src={sessionGoogle.imageUrl} onClick={displayAccount} />
            </div>
            <div id="accountGoogle" onMouseLeave={notDisplayAccount}>
                <img className="pictureUser2" src={sessionGoogle.imageUrl} />
                <p>{sessionGoogle.name}</p>
                <p>{sessionGoogle.email}</p>
                <LogoutGoogle />
            </div>
        </header>
    );
};
