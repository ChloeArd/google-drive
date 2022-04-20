import "./MyDrive.css";
import {Menu} from "../../components/Menu/Menu";

export const MyDrive = function () {

    return (
        <main className="Home">
            <Menu />
            <div className="flexColumn">
                <section id="sectionTop">
                    <h1>Mon Drive</h1>
                </section>
                <section id="sectionBottom">
                    <p className="title">Dossiers</p>
                    <p className="title">Fichiers</p>
                </section>
            </div>
        </main>
    );
};
