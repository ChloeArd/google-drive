import "./MyDrive.css";
import {Menu} from "../../components/Menu/Menu";
import {Directory} from "../../components/Directory/Directory";
import {File} from "../../components/File/File";
import {Header} from "../../components/Header/Header";
import {useState} from "react";

export const MyDrive = function () {

    const [sessionGoogle, setSessionGoogle] = useState(JSON.parse(sessionStorage.getItem("infoGoogle")));

    return (
        <>
            <Header sessionGoogle={sessionGoogle} />
            <main className="Home">
                <Menu />
                <div className="flexColumn">
                    <section id="sectionTop">
                        <h1>Mon Drive</h1>
                    </section>
                    <section id="sectionBottom">
                        <p className="title">Dossiers</p>
                        <div className="flexRow2">
                            <Directory />
                            <Directory />
                        </div>
                        <p className="title">Fichiers</p>
                        <div className="flexRow2">
                            <File />
                            <File />
                            <File />
                            <File />
                            <File />
                            <File />
                        </div>
                    </section>
                </div>
            </main>
        </>

    );
};
