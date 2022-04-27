import "./Log.css";
import {faGoogleDrive} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LoginGoogle} from "../../components/LoginGoogle/LoginGoogle";

export const Log = function () {

    return(
        <div className="Log">
            <h1><FontAwesomeIcon className="logoDrive" icon={faGoogleDrive}/>Drive</h1>
            <div id="containerRegIns" className="flexRow">
                <div id="inscription">
                    <h2>Connecte-toi !</h2>
                    <LoginGoogle />
                </div>
            </div>
        </div>
    );
}