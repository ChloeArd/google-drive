import "./LoginGoogle.css";
import GoogleLogin from "react-google-login";
import {useEffect, useState} from "react";


export const LoginGoogle = function () {

    const [user, setUser] = useState([]);

    const clientId = "583129085044-bk7cr6ns7s7q327e2qokssd091jvbuvo.apps.googleusercontent.com";

    let IDGoogle = [];

    const onSuccess = (res) => {
        console.log("[Login Success]");
        IDGoogle.push(JSON.stringify(res.profileObj));
        sessionStorage.setItem("infoGoogle", JSON.stringify(res.profileObj));

        window.location.replace("http://localhost:8000/my-drive");
    }

    const [sessionGoogle, setSessionGoogle] = useState(JSON.parse(sessionStorage.getItem("infoGoogle")));

    if (sessionGoogle !== []) {
        useEffect(() => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/api/user/add");
            xhr.responseType = "json";
            xhr.onload = () => xhr.status === 200 && setUser(xhr.response)
            const body = {
                name: sessionGoogle.name,
                email: sessionGoogle.email,
                image: sessionGoogle.imageUrl,
                id_google: sessionGoogle.googleId
            }
            xhr.send(JSON.stringify(body));
        }, []);
    }

    const onFailure = () => {
        console.log("[Login failed]");
    }

    return (
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText="Se connecter avec Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                onClick
                cookiePolicy="single_host_origin"
                isSignedIn={true}
                className="loginGoogle"
            />

            {IDGoogle.map(value => <p>{value.email}</p>)}
        </>
    );
}