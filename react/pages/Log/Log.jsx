import "./Log.css";
import {faGoogleDrive} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {LoginGoogle} from "../../components/LoginGoogle/LoginGoogle";
import {LogoutGoogle} from "../../components/LogoutGoogle/LogoutGoogle";

export const Log = function () {

    return(
        <div className="Log">
            <h1><FontAwesomeIcon className="logoDrive" icon={faGoogleDrive}/>Drive</h1>
            <div id="containerRegIns" className="flexRow">
                <div id="registration">
                    <h2>Inscris-toi !</h2>
                    <LogoutGoogle />

                </div>
                <div id="inscription">
                    <h2>Connecte-toi !</h2>
                    <LoginGoogle />
                </div>
            </div>
        </div>
    );
}