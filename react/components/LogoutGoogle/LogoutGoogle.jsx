import "./LogoutGoogle.css";
import {GoogleLogout} from "react-google-login";

export const LogoutGoogle = function () {

    const clientId = "583129085044-bk7cr6ns7s7q327e2qokssd091jvbuvo.apps.googleusercontent.com";

    const onSuccess = () => {
        alert("Vous êtes bien déconnecté !");
        sessionStorage.setItem("infoGoogle", []);
        window.location.replace("http://localhost:8000");
    }

    return(
        <>
            <GoogleLogout
                clientId={clientId}
                buttonText="Se déconnecter"
                onLogoutSuccess={onSuccess}
                className="logoutGoogle"
            ></GoogleLogout>

        </>
    );
}