import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons'

export const Header = function () {

    return (
        <header className="Header">
            <FontAwesomeIcon icon={faGoogleDrive} className="logoDrive" />
            <a href="/">Drive</a>

            <span id="logoSearch"><FontAwesomeIcon icon={faSearch} /></span>
            <input id="inputSearch" type="text" placeholder="Rechercher dans Drive"/>
            <span id="logoSliders"><FontAwesomeIcon icon={faSliders} /></span>

            <div className="flex-end">
                <div className="pictureUser">User</div>
            </div>
        </header>
    );
};
